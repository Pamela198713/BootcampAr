import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent {
  curso : any;
  contenedorID : any;
  // guardar ID

  constructor(private productService: ProductsService){}

  getAllCourse(){
    this.productService.getAll().subscribe({
      next:(data) => {
        this.curso = data
      }
    })
  }

  updateCourse(){
    this.productService.update(this.contenedorID,this.curso).subscribe({
      next:(data) => {
        
      }
    })
  }

  // Actualizar ID
  deleteCourse(){
    this.productService.delete(this.contenedorID)
  }


}
