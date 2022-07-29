import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  tiles: any[] = [];
  experiences: Experience[] = [];
  isLogged = false;


  constructor(
    private experienceService: ExperienceService,
    public snackBar: MatSnackBar,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.getExperiences();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getExperiences(): void {
    this.experienceService.list().subscribe(
      data => {
        this.experiences = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  deleteExperience(id: number) {
    if (confirm('¿Está seguro que desea eliminar este registro?')) {
      this.experienceService.delete(id).subscribe(
        data => {
          this.snackBar.open("Experiencia eliminada. ", "✔", {
            duration: 3000
          });
          this.getExperiences();
        },
        err => {
          this.snackBar.open("No se pudo eliminar la Experiencia laboral. ", "Χ");
        }
      );
    }
  }
}
