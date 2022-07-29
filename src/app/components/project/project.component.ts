import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {

  tiles: any[] = [];
  projects: Project[] = [];
  isLogged = false;


  constructor(
    private projectService: ProjectService,
    private snackBar: MatSnackBar,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.getProjects();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getProjects(): void {
    this.projectService.list().subscribe(
      data => {
        this.projects = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  deleteProject(id: number) {
    if (confirm('¿Está seguro que desea eliminar este registro?')) {
      this.projectService.delete(id).subscribe(
        data => {
          this.snackBar.open("Proyecto eliminado. ", "✔", {
            duration: 3000
          });
          this.getProjects();
        },
        err => {
          this.snackBar.open("No se ha podido eliminar el proyecto. ", "Χ");
        }
      );
    }
  }
}
