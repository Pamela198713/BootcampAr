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
import { AppRoutingModule } from '../app-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { MentoresComponent } from './mentores/mentores.component';
import { RouterModule } from '@angular/router';
import { ConfirmacionPagoComponent } from './confirmacion-pago/confirmacion-pago.component';
import { CategoryComponent } from './category/category.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { LeccionesCreateComponent } from './lecciones/create/create.component';
import { UsuariosCreateComponent } from './usuario/create/create.component';
import { UsuariosEditComponent } from './usuario/edit/edit.component';
import { LeccionesEditComponent } from './lecciones/edit/edit.component';
import { LeccionesComponent } from './lecciones/lecciones.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CursoEditComponent } from './cursos/curso-edit/curso-edit.component';

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
    MentoresComponent,
    LeccionesEditComponent,

    ConfirmacionPagoComponent,
      CategoryComponent,
      CategoryEditComponent,
      CategoryCreateComponent,
      LeccionesCreateComponent,
      UsuariosCreateComponent,
      UsuariosEditComponent,
      LeccionesComponent,
      UsuarioComponent,
      CursoEditComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
