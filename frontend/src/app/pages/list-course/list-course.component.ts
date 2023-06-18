import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  cursos : any;
  contenedorID : any;
  // guardar ID

  constructor(private productService: ProductsService
    , private router: Router){}

  ngOnInit(): void {
    this.getAllCourse();
  }

  getAllCourse(){
    this.productService.getAll().subscribe({
      next:(data) => {
        this.cursos = data
      }
    })
  }

  // updateCourse(){
  //   this.productService.update(this.contenedorID,this.cursos).subscribe({
  //     next:(data) => {
        
  //     }
  //   })
  // }

  editarCurso(id: number, event: Event): void {
    event.preventDefault();
    this.router.navigate([`/dashboard/cursos/${id}`]); 
  }
  
  eliminarCurso(id: number, event: Event): void {
    event.preventDefault();
    const confirmacion = confirm('¿Estás seguro de eliminar este curso?');
    if (confirmacion) {
      this.productService.delete(id).subscribe({
        next:(data) => {
          this.getAllCourse();
        }
      })
    }
  }



}
