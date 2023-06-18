import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateCoursesComponent } from './pages/create-courses/create-courses.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RutasProtegidasGuard } from './guards/rutas-protegidas.guard';
import { CursosComponent } from './pages/cursos/cursos.component';
import { NoAuthGuardGuard } from './guards/no-auth-guard.guard';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ListCourseComponent } from './pages/list-course/list-course.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { CategoryCreateComponent } from './pages/category-create/category-create.component';
import { ConfirmacionPagoComponent } from './pages/confirmacion-pago/confirmacion-pago.component';
import { MentoresComponent } from './pages/mentores/mentores.component';
import { LeccionesCreateComponent } from './pages/lecciones/create/create.component';
import { LeccionesEditComponent } from './pages/lecciones/edit/edit.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuariosEditComponent } from './pages/usuario/edit/edit.component';
import { UsuariosCreateComponent } from './pages/usuario/create/create.component';
import { CursoEditComponent } from './pages/cursos/curso-edit/curso-edit.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'home'}, 
  { path: 'home', component: HomeComponent },
  { path: 'createCourse', component: CreateCoursesComponent, canActivate: [RutasProtegidasGuard]},
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuardGuard] },
  { path: 'cursos', component: CursosComponent },
  { path: 'perfil/:id', component: PerfilComponent, canActivate: [RutasProtegidasGuard] },
  { path: 'product-details/:id', component: ProductDetailsComponent, canActivate: [RutasProtegidasGuard]  },
  { path: 'confirmacion-pago', component: ConfirmacionPagoComponent},
  { path: 'dashboard', component: DashboardComponent, 
  children: [
    { path: '', redirectTo: 'CreateCoursesComponent', pathMatch: 'full' },
    { path: 'cursos', component: ListCourseComponent },
    { path: 'cursos/create', component: CreateCoursesComponent },
    { path: 'cursos/:id', component: CursoEditComponent },
    { path: 'lecciones/create', component: LeccionesCreateComponent },
    { path: 'lecciones/:id', component: LeccionesEditComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'category/create', component: CategoryCreateComponent },
    { path: 'category/:id', component: CategoryEditComponent },
    { path: 'usuarios', component: UsuarioComponent },
    { path: 'usuarios/create', component: UsuariosCreateComponent },
    { path: 'usuarios/:id', component: UsuariosEditComponent },
  ],
  canActivate: [RutasProtegidasGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [NoAuthGuardGuard]},
  { path: 'carrito',component: CarritoComponent, canActivate: [RutasProtegidasGuard]},
  { path:'registro', component: RegistroComponent, canActivate: [NoAuthGuardGuard]},
  { path: 'carrito/:id',component: CarritoComponent, canActivate: [RutasProtegidasGuard]},
  { path: 'listCourse', component: ListCourseComponent, canActivate: [RutasProtegidasGuard] },
  { path: 'listUser', component: ListUserComponent, canActivate: [RutasProtegidasGuard] },
  { path: 'mentores', component: MentoresComponent },
  { path: '**', redirectTo:'home' }, 
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
