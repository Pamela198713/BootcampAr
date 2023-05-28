import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateCoursesComponent } from './pages/create-courses/create-courses.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'home'}, 
  { path: 'home', component: HomeComponent },
  { path: 'createCourse', component: CreateCoursesComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegistroComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo:'home' }, 
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
