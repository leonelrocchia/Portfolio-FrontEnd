import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  tiles: any[] = [];
  educations: Education[] = [];
  isLogged = false;


  constructor(
    private educationService: EducationService,
    private snackBar: MatSnackBar,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.getEducations();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getEducations(): void {
    this.educationService.list().subscribe(
      data => {
        this.educations = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  deleteEducation(id: number) {
    if (confirm('¿Está seguro que desea eliminar este registro?')) {
      this.educationService.delete(id).subscribe(
        data => {
          this.snackBar.open("Educación eliminada. ", "✔", {
            duration: 3000
          });
          this.getEducations();
        },
        err => {
          this.snackBar.open("No se ha podido eliminar la educación. ", "Χ");
        }
      );
    }
  }
}
