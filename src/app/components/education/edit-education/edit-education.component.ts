import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

  education: Education = null;

  constructor(
    private educationService: EducationService,
    private activatedRoute: ActivatedRoute,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.detail(id).subscribe(
      data => {
        this.education = data;
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
    this.educationService.update(id, this.education).subscribe(
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
