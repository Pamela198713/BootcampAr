import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  constructor (private dataService:DataService, private formBuilder: FormBuilder) {}
  
  loginForm= this.formBuilder.group({
    email: [''],
    password: ['']
  });
  }
  
  


