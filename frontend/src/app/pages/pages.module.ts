import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { CreateCoursesComponent } from './create-courses/create-courses.component';

@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent
    LoginComponent,
    CreateCoursesComponent

  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
