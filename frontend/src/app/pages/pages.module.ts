import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
