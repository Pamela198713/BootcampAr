import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  constructor (private toastr: ToastrService, 
               private formBuilder: FormBuilder, 
               private authService: AuthServiceService,
               private router: Router
              ) {}
  
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
      const username = loginForm.value.email;
      const password = loginForm.value.password;
      

      this.authService.login({username,password}).subscribe({
        next:() => {
          this.toastr.success('Usuario logeado exitosamente');
          this.router.navigate(['/home']); 
        },
        error:(err) => {
          this.toastr.error("error: " + err.message)
          console.log(err);
        }  
      })

    }


}
  
  
  


