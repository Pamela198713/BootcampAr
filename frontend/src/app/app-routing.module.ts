import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CreateCoursesComponent } from './pages/create-courses/create-courses.component';

const routes: Routes = [ 
  { path: 'login', component: LoginComponent }, 
  { path: 'footer', component: FooterComponent },
  { path: 'createCourse', component: CreateCoursesComponent}

];  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
