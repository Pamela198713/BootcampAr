import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  perfil: any;

  constructor(private authService: AuthServiceService,
    private toastr: ToastrService,
    private router: Router
  ) { }
  ngOnInit(): void {
    // console.log("El ID es: " + this.authService.getUserLoggedId());

    this.perfil = this.authService.getUserLoggedId()
    
  }

  


  logout() {
    this.authService.logout();
    this.toastr.success('Se ha cerrado la sesion exitosamente');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
