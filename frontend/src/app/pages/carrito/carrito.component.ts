import { Component } from '@angular/core';
import { ItemCarrito } from '../../shared/interfaces/ItemCarrito';
import { CarritoService } from '../../services/carrito.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Curso } from 'src/app/shared/interfaces/Curso';
import { tick } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent {

  curso: Curso = {} as Curso;
  
  // public totalPrice: number = 0;
  // public items: ItemCarrito[] = [];
 
  constructor(
    // private CarritoService: CarritoService
    private route: ActivatedRoute,
    private productService: ProductsService,
    private toastr: ToastrService,
    private router: Router
    ) {}

 
  ngOnInit(): void{
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = parseInt(idParam, 10);
      console.log(id)
      this.productService.getById(id).subscribe({
        next: (data) => {
          this.curso = data
          console.log(this.curso)
        }
      });
    };





    // this.authService.login({username,password}).subscribe({
    //     next:() => {
    //       this.toastr.success('Usuario logeado exitosamente');
    //       this.router.navigate(['/dashboard']); 
    //     },
    //     error:(err) => {
    //       this.toastr.error("error: " + err.message)
    //       console.log(err);
    //     }  
    //   })

   
  //   let algo: ItemCarrito[] = [
  //     {
  //       id: 1,
  //       name: 'Item 1',
  //       title: 'Item 1',
  //       price: 10,
  //       image: 'https://picsum.photos/200/300',
  //       quantity: 1,
  //       description: 'Item 1 description'
  //     }, 
  //     {
  //       id: 2,
  //       name: 'Item 2',
  //       title: 'Item 2',
  //       price: 20,
  //       image: 'https://picsum.photos/200/300',
  //       quantity: 1,
  //       description: 'Item 2 description'
  //     }

  //   ];

  //   this.CarritoService.setItems(algo);
    
  //   this.items= this.CarritoService.getItems(); 
  //   this.calculateTotalPrice();
  // }

  // updateQuantity(event: Event, item: any) {
  //   const target = event.target as HTMLInputElement;
  //   item.quantity = Number(target.value);
  //   this.CarritoService.updateItemQuantity(item, item.quantity);
  //   this.calculateTotalPrice()
  // }

  // calculateTotalPrice() {
  //   this.totalPrice = this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  // }

  // removeItem(index: number) {
  //   this.items.splice(index, 1);
  //   this.calculateTotalPrice();
  // }

  }

  atras(){
    this.router.navigate(['/cursos']); 
  }

  comprado(){
    this.toastr.success('Compra realizada con exito');
    this.router.navigate(['/cursos']); 
  }
}
  

