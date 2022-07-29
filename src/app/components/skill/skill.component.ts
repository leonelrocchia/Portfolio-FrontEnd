import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Skill } from 'src/app/models/skill.model';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  tiles: any[] = [];
  skills: Skill[] = [];
  value: 0;
  isLogged = false;


  constructor(
    private skillService: SkillService,
    private snackBar: MatSnackBar,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.getSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getSkills(): void {
    this.skillService.list().subscribe(
      data => {
        this.skills = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  deleteSkill(id:number){
    if(confirm('¿Está seguro que desea eliminar este registro?')){
    this.skillService.delete(id).subscribe(
      data => {
        this.snackBar.open("Skill eliminada. ", "✔", {
          duration: 3000
        });
        this.getSkills();
      },
      err => {
        this.snackBar.open("No se ha podido eliminar la skill. ", "Χ");
      }
    );
  }
}

}
