import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthServiceService } from 'src/app/auth/auth-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(
    private dataService: DataService,
    private autService: AuthServiceService) { }

}

