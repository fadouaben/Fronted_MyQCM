import { Component, OnInit } from '@angular/core';
import { MatiereServiceService } from '../matiere-service.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})

export class MatiereComponent implements OnInit {
  matieres: any[] = [];

  constructor(private matiereService: MatiereServiceService) {}
  ngOnInit() {
    this.matiereService.getMatieres().subscribe((data: any) => {
      this.matieres = data;
      console.log(this.matieres)
    });
  }


}
