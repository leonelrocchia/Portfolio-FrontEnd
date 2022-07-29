import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

  tiles: any[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  form: FormGroup;
  description: string;

  puesto: '';
  empleador: '';
  descripcion: '';
  img: '';
  inicio: 0;
  fin: 0;

  constructor(
    private experienceService: ExperienceService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experience = new Experience(this.puesto, this.empleador, this.descripcion, this.img, this.inicio, this.fin);
    this.experienceService.save(experience).subscribe(
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
