
export class SousSkill{
    id!:number;
    valeur!:string;
}
export class Skill {
    id!: number;
    valeur!:string;
    sousSkills!: SousSkill[];
}