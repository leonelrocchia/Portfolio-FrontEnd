import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education/new-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience/new-experience.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProjectComponent } from './components/project/edit-project/edit-project.component';
import { NewProjectComponent } from './components/project/new-project/new-project.component';
import { EditSkillComponent } from './components/skill/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/skill/new-skill/new-skill.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newEducation', component: NewEducationComponent},
  {path: 'editEducation/:id', component: EditEducationComponent},
  {path: 'newExperience', component: NewExperienceComponent},
  {path: 'editExperience/:id', component: EditExperienceComponent},
  {path: 'newProject', component: NewProjectComponent},
  {path: 'editProject/:id', component: EditProjectComponent},
  {path: 'newSkill', component: NewSkillComponent},
  {path: 'editSkill/:id', component: EditSkillComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
