import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { Store } from './state/store.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private store:Store) { }

  private products: Product[] = this.store.value.products;

  private product$ = this.store.store.subscribe(()=>{
    this.products = this.store.value.products;
    console.log("from Observable", this.products);
  });

  public getProducts(): Product[] {
    console.log("from Getter", this.products);
    return this.store.value.products;
  }

  public removeProductFromList(productId:number){
    this.store.remove(productId);
  }

  public addProduct(product: Product): void{
    this.store.set(product);
  }
}
