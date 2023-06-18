import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/auth/auth-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  visitante: any;
  estadisticas: any;

  constructor(
    private authService: AuthServiceService
  ) { }

  ngOnInit(): void {
      this.authService.getUserLoggedId().subscribe(id => {
        this.visitante = this.authService.getRol(id).subscribe(
          (rol: string) => {
            this.visitante = rol
          }
        );
      });
      
     

     
  }
  

}


