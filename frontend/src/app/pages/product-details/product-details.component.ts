import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/shared/interfaces/Curso';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  curso: Curso = {} as Curso;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}
  
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = parseInt(idParam, 10);
      console.log(id)
      this.productService.getById(id).subscribe({
        next:(data) => {
          this.curso = data
        }
    });
  };
}
}
