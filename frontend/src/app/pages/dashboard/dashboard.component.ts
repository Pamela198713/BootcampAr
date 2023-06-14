import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private authService: AuthServiceService
    ){}

  userRol:any = this.authService.getRol("1")

  ngOnInit(): void {
    this.visitante = 1
    this.estadisticas = 1

    // const userrol = this.authService.getRol('id');
    // if(userrol === 2){
    //   this.visitante = 2
    // }
    // else{
    //   this.visitante = 1
    // }

    }
  


}
