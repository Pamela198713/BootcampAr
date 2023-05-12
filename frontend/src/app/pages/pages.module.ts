import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { CreateCoursesComponent } from './create-courses/create-courses.component';
import { LayoutModule } from '../layout/layout.module';
import { CursosComponent } from './cursos/cursos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ProductDetailsComponent,
    PerfilComponent,
    CreateCoursesComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    HttpClientModule
  ]
})
export class PagesModule { }
