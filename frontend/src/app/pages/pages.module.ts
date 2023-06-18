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
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroComponent } from './registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { ListUserComponent } from './list-user/list-user.component';
import { MentoresComponent } from './mentores/mentores.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ProductDetailsComponent,
    PerfilComponent,
    CreateCoursesComponent,
    CursosComponent,
    DashboardComponent,
    RegistroComponent,
    CarritoComponent,
    ListCourseComponent,
    ListUserComponent,
    MentoresComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
