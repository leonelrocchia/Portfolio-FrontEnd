import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill.model';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  form: FormGroup;
  description: string;

  skill: '';
  nivel: 0;
  img: '';

  constructor(
    private skillService: SkillService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.skill, this.nivel, this.img);
    this.skillService.save(skill).subscribe(
      data => {
        this.snackBar.open("Registro agregado. ", "✔", {
          duration: 3000
        });
        this.router.navigate(['/'])
      },
      err => {
        this.snackBar.open(err.error.mensaje, "X", {
          duration: 3000
        })
      }
    );

  }
}
