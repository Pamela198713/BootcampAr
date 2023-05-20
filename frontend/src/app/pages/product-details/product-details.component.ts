import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  dato={id: "", Titulo: "",Precio: 0,Descripcion: "",Duracion: 0,Nivel: "",Lenguajes: "",Imagenes: ""}
  dato2=[{id: "", Titulo: "",Precio: 0,Descripcion: "",Duracion: 0,Nivel: "",Lenguajes: "",Imagenes: ""}]
   
   constructor(
      private route: ActivatedRoute,
      private dataService: DataService
    ) {}
  
  
    ngOnInit(): void {
      const idParam = this.route.snapshot.paramMap.get('id');
      if (idParam) {
        const id = parseInt(idParam, 10);
          this.dataService.getById('curso',id).subscribe({
            next: (data) => {
            this.dato = data;
            console.log(data)
          }});
        }
        this.dataService.getAll('curso').subscribe({
          next: (data2) => {
          this.dato2 = data2;
        }});
    }   
    }