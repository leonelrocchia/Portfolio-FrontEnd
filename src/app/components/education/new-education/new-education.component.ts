import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';


@Component({
  selector: 'app-education-form',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  form: FormGroup;
  description: string;

  titulo: '';
  institucion: '';
  descripcion: '';
  img: '';
  inicio: 0;
  fin: 0;

  constructor(
    private educationService: EducationService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {

  }

  onCreate(): void {
    const education = new Education(this.titulo, this.institucion, this.descripcion, this.img, this.inicio, this.fin);
    this.educationService.save(education).subscribe(
      data => {
        this._snackBar.open("Registro agregado. ", "✔", {
          duration: 3000
        });
        this.router.navigate(['/'])
      },
      err => {
        this._snackBar.open(err.error.mensaje, "X", {
          duration: 3000
        })
      }
    );
  }
}



