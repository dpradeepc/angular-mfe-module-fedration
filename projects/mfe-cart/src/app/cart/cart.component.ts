import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '@shared';

interface CartProduct {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {

  public items: CartProduct[] = [];
  public totalItems = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    const cartItems = this.cartService.getCartItems();
    this.items = cartItems
        .reduce((acc, cur) => {
          const idx = acc.findIndex(p => p.product.id === cur.id);
          idx !== -1 ? acc[idx].quantity++ : acc.push({product: cur, quantity: 1});
          return acc;
        }, [] as CartProduct[]);

    this.totalItems = cartItems.length;
  }
}
