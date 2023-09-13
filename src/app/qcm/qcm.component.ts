import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';
import { SelectionService } from '../selection.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.css']
})
export class QcmComponent implements OnInit{
  qcmDtat: any = {};
  selectedSousSkill:string = '';
  constructor(private route: ActivatedRoute,private skillService: SkillService,private selectServ:SelectionService){
    
  }
  ngOnInit(): void {
    this.selectedSousSkill = this.selectServ.getSelectedSousSkill();
    this.skillService.createQCMForSousSkill(this.selectedSousSkill).subscribe(
      (data) => {
        this.qcmDtat = data;
        console.log('Données du qcm:',this.qcmDtat);
      },
      (error) => {
        console.error('Erreur lors de la créaetion du qcm:', error);
      }
    );
      
  }
  message:string= '';
  reponseUtilisateur:string='';
  veriferRep(){
    console.log(this.reponseUtilisateur);
    if (this.reponseUtilisateur === this.qcmDtat.response){
      this.message = 'Bonne réponse !'
    }
    else{
      this.message = 'Mauvaise réponse !' + this.qcmDtat.response    }

  }

}
