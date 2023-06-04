import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  constructor (private dataService:DataService, private formBuilder: FormBuilder, private authService: AuthServiceService) {}
  
  // loginForm= this.formBuilder.group({
  //  email: [''],
  //  password: ['']
  //  });
    
    loginForm : FormGroup = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]]
  
    })
  
    get Password(){
      return this.loginForm.get("password")
    }

    get Email(){
      return this.loginForm.get("email")
    }


    onSubmit(loginForm: FormGroup) {
      const email = loginForm.value.email;
      const password = loginForm.value.password;
      

      this.authService.login({email,password}).subscribe({
        next:() => {
          console.log('Login successful');
        },
        error:(err) => {
          console.log("error:", err)
        }  
      })

    }


}
  
  
  


