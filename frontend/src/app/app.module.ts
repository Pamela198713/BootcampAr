import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';





@NgModule({
  declarations: [
    AppComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule, 
    LayoutModule,
    PagesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
