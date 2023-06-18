import { Component } from '@angular/core';
import { ItemCarrito } from '../../shared/interfaces/ItemCarrito';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent {
  public totalPrice: number = 0;
  public items: ItemCarrito[] = [];
 
  constructor(private CarritoService: CarritoService) {}

 
  ngOnInit(): void{
   
    let algo: ItemCarrito[] = [
      {
        id: 1,
        name: 'Item 1',
        title: 'Item 1',
        price: 10,
        image: 'https://picsum.photos/200/300',
        quantity: 1,
        description: 'Item 1 description'
      }, 
      {
        id: 2,
        name: 'Item 2',
        title: 'Item 2',
        price: 20,
        image: 'https://picsum.photos/200/300',
        quantity: 1,
        description: 'Item 2 description'
      }

    ];

    this.CarritoService.setItems(algo);
    
    this.items= this.CarritoService.getItems(); 
    this.calculateTotalPrice();
  }

  updateQuantity(event: Event, item: any) {
    const target = event.target as HTMLInputElement;
    item.quantity = Number(target.value);
    this.CarritoService.updateItemQuantity(item, item.quantity);
    this.calculateTotalPrice()
  }

  calculateTotalPrice() {
    this.totalPrice = this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeItem(index: number) {
    this.CarritoService.removeItem(index);
    this.calculateTotalPrice();
  }


}
  

