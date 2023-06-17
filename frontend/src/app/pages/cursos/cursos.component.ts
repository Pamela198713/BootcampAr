import { Component } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Curso } from 'src/app/shared/interfaces/Curso';
import { ItemCarrito } from 'src/app/shared/interfaces/ItemCarrito';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  
  constructor (private dataService: DataService) {}
  
  CreateCouse(){
    
          
  }
  agregarCarrito(item : Curso){
    let iCarrito : ItemCarrito = {
      titulo: item.titulo,
      descripcion: item.descripcion,
      precio: item.precio
    }
    
    let carrito : ItemCarrito[] = [];
    carrito.push(iCarrito);
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }
}
