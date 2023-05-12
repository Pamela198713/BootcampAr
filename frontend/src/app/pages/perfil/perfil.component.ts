import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
 
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
     this.dataService.getAll('perfil').subscribe(data => {
      console.log(data);
     });
  }


}
