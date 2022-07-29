export class Skill {
    id?: number;
    skill: String;
    nivel: number;
    img: String;

    constructor(skill: string, nivel: number, img: string){
        this.skill = skill;
        this.nivel = nivel;
        this.img = img;
    }
}