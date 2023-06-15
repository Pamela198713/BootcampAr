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
    this.getRole()
  }

  getRole() {
    this.authService.getRol(1).subscribe(
      (rol: string) => {
        console.log(rol);
        this.visitante = rol
      }
    );
  }
  
  


}



// if(userrol === 2){
//   this.visitante = 2
// }
// else{
//   this.visitante = 1
// }