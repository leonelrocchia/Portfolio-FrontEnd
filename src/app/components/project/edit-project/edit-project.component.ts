import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  project: Project = null;

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    public snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.detail(id).subscribe(
      data => {
        this.project = data;
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
    this.projectService.update(id, this.project).subscribe(
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
