import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  form: FormGroup;
  description: string;

  proyecto: '';
  cliente: '';
  descripcion: '';
  img: '';
  year: 0;
  link: '';

  constructor(
    private projectService: ProjectService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const project = new Project(this.proyecto, this.cliente, this.descripcion, this.img, this.year, this.link);
    this.projectService.save(project).subscribe(
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
