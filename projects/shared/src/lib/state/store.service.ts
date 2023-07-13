import { BehaviorSubject, Observable } from "rxjs";
import { State } from "../models/state";
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Product } from "../models/product";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Store {

    private products : Product[] = [
        {
          id: 1,
          link: 'https://images.unsplash.com/photo-1518893883800-45cd0954574b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhbW9waG9uZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
          name: 'Swiss Gramophone Player',
          description: 'Perfect way to add a little sophistication and personality to your home.'
        },
        {
          id: 2,
          link: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlueWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
          name: 'Classics Vinyl Lot',
          description: 'These classic vinyls are sure to delight!'
        },
        {
          id: 3,
          link: 'https://images.unsplash.com/photo-1611773647386-c7768f7f0313?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmludGFnZSUyMGNsb2NrfGVufDB8fDB8fHww&w=1000&q=80',
          name: 'Leroy and Fils',
          description: 'This rare collectible piece tells a remarkable story of a bygone era'
        },
        {
          id: 4,
          link: 'https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmludGFnZSUyMGNsb2NrfGVufDB8fDB8fHww&w=1000&q=80',
          name: 'Time Punch Clock',
          description: 'An interesting artefact from the early 1900s, this English time punch clock makes for a prized period possession.'
        },
        {
          id: 5,
          link: 'https://images.unsplash.com/photo-1604151967142-db7ed696081f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmludGFnZSUyMGNsb2NrfGVufDB8fDB8fHww&w=1000&q=80',
          name: 'George Jensen Decorative Clock',
          description: 'An absolute treasure to have in your collection'
        },
        {
          id: 6,
          link: 'https://images.unsplash.com/photo-1574460831170-8bf3510bc15f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFudGlxdWUlMjBjbG9ja3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
          name: 'Tiffany and Co. Clock',
          description: 'This is a mechanical clock that works with daily windings.',
        },
        {
          id: 7,
          link: 'https://images.unsplash.com/photo-1590064525915-cbfbf70b6801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          name: 'Chrysler Dodge',
          description: 'Sturdy and Stylish, resonating with human talent and precision.'
        },
        {
          id: 8,
          link: 'https://images.unsplash.com/photo-1630028930932-528b0f4a6b27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80',
          name: 'Chevorlet BelAir',
          description: 'this rare collectible piece tells a remarkable story of a bygone era'
        }
      ];


    private state: State = {
        products: this.products
    }

    private subject = new BehaviorSubject<State>(this.state);
    public store = this.subject.asObservable().pipe(distinctUntilChanged());

    get value(){
        return this.subject.value;
    }

    set(state: Product){
        let products = [...this.value.products, state]
        this.subject.next({
            ...this.value, products: products
        })
    }

    remove(productId: number){
        let products = this.products.filter((product)=>{
            return product.id != productId
        });
        this.subject.next({
            ...this.value, products: products
        })
    }

}