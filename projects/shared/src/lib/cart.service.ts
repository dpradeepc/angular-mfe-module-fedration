import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];

  constructor() { }

  public getCartItems(): Product[] {
    return this.products;
  }

  public addToCart(product: Product): Product[] {
    this.products.push(product);
    return this.products;
  }
}

