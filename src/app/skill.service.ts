import { Injectable } from '@angular/core';
import { Skill, SousSkill } from './skills/skill.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'content-type':'application/json'});

  private skills: Skill[] =[];
  constructor(private http: HttpClient) { }
  getAllSkills(): Observable<any>{
    return this.http.get<any[]>(this.baseurl + '/skills/',{headers:this.httpHeaders});
  }

  getAllSousSkills(skillId:number):Observable<any>{
    const sousSkillUrl = `${this.baseurl}/skills/${skillId}/sous-skills/`
    return this.http.get<any[]>(sousSkillUrl);
  }

  createQCMForSousSkill(sousSkillVal:string):Observable<any>{
    return this.http.post<any>(`${this.baseurl}/quiz/create_qcm/`, {sous_skill_val:sousSkillVal},{headers:this.httpHeaders});
  }

  getSkills(): Skill[] {
    return this.skills;
  }
  addSkills(skill: Skill): void {
    this.skills.push(skill);
  }
  addSousSkill(skillId:number,sousSkills:SousSkill):void{
    const skill =this.skills.find((s) => s.id === skillId);
    if (skill){
      skill.sousSkills.push(sousSkills);
    }
  }
}
