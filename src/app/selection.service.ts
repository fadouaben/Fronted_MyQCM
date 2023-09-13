import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  selectedSousSkill:string = '';
  constructor() { }
  setSelectedSousSkill(sousSkill:string){
    this.selectedSousSkill = sousSkill;
  }

  getSelectedSousSkill(){
    return this.selectedSousSkill;
  }

}
