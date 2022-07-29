//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './components/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillComponent } from './components/skill/skill.component';
import { RedesComponent } from './components/redes/redes.component';
import { ProjectComponent } from './components/project/project.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education/new-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience/new-experience.component';
import { NewProjectComponent } from './components/project/new-project/new-project.component';
import { EditProjectComponent } from './components/project/edit-project/edit-project.component';
import { NewSkillComponent } from './components/skill/new-skill/new-skill.component';
import { EditSkillComponent } from './components/skill/edit-skill/edit-skill.component';

//Interceptor
import { interceptorProvider } from './services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducationComponent,
    ExperienceComponent,
    SkillComponent,
    RedesComponent,
    ProjectComponent,
    BannerComponent,
    ProfileComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    EditEducationComponent,
    NewEducationComponent,
    EditExperienceComponent,
    NewExperienceComponent,
    NewProjectComponent,
    EditProjectComponent,
    NewSkillComponent,
    EditSkillComponent,  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule

  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
  entryComponents: [NewEducationComponent]
})
export class AppModule { }
