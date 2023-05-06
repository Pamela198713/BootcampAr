import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
