import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill.model';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill: Skill = null;

  constructor(
    private skillService: SkillService,
    private activatedRoute: ActivatedRoute,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.detail(id).subscribe(
      data => {
        this.skill = data;
      },
      err => {
        this.snackBar.open(err.error.mensaje, "X", {
          duration: 3000
        }),
          this.router.navigate(['/']);
      }
    );

  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe(
      data => {
        this.snackBar.open("Registro actualizado. ", "✔", {
          duration: 3000
        }),
          this.router.navigate(['/']);
      },
      err => {
        this.snackBar.open(err.error.mensaje, "X", {
          duration: 3000
        })
      }
    );

  }

}
