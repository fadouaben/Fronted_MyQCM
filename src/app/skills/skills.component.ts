import { Component, NgModule, OnInit } from '@angular/core';
import { Skill,SousSkill } from './skill.model';
import { SkillService } from '../skill.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers:[SkillService]
})

export class SkillsComponent implements OnInit{
  skills : any[] = [];
  sousSkills:{[key:number]:any[]} = {};
  constructor(private skillService: SkillService){
    
  }
  ngOnInit(): void {
    this.skillService.getAllSkills().subscribe(
      data => {
        this.skills = data;
        console.log(this.skills);
        for (const skill of this.skills){
          this.skillService.getAllSousSkills(skill.id).subscribe(sousSkillsData => {
            this.sousSkills[skill.id] = sousSkillsData;
          });
        }
      },
      
    );

    
      
  }


}
