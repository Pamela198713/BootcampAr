import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { CreateCoursesComponent } from './create-courses/create-courses.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ProductDetailsComponent
    PerfilComponent
    CreateCoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
