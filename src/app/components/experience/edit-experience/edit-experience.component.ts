import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  experience: Experience = null;

  constructor(
    private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.detail(id).subscribe(
      data => {
        this.experience = data;
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
    this.experienceService.update(id, this.experience).subscribe(
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
