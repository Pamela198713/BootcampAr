import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/shared/interfaces/Curso';
import { ItemCarrito } from 'src/app/shared/interfaces/ItemCarrito';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  curso: any;

  constructor (private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next:(dato) => {
        this.curso = dato
        console.log(this.curso)
      }
    })
  }

}


// agregarCarrito(item : Curso){
//   // let iCarrito : ItemCarrito = {
//   //   titulo: item.titulo,
//   //   descripcion: item.descripcion,
//   //   precio: item.precio
//   // }
  
//   let carrito : ItemCarrito[] = [];
//   // carrito.push(iCarrito);
//   localStorage.setItem("carrito", JSON.stringify(carrito))
// }