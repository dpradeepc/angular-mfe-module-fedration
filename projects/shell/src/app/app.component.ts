import { Component } from '@angular/core';
import { NotificationService } from '@shared';
import { Store } from '@shared';
import { Product } from 'projects/shared/src/lib/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles.css']
})
export class AppComponent {

  todo$ = this.store.store.subscribe((state)=>console.log(this.store.value));
  public numNotifications = 0;
  public isAuthenticated = true;
  public name = "Pradeep";

  private product9: Product = {
    id: 1,
    link: 'https://images.unsplash.com/photo-1518893883800-45cd0954574b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhbW9waG9uZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'From Store Swiss Gramophone Player',
    description: 'Perfect way to add a little sophistication and personality to your home.'
  };
  
  private product10: Product = {
    id: 2,
    link: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlueWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    name: 'Classics Vinyl Lot',
    description: 'These classic vinyls are sure to delight!'
  };
  
  constructor(private notificationService: NotificationService,
              private store: Store) { 

    this.numNotifications = notificationService.getNotifications().length;

  }

  public addProduct1(){
    this.store.set(this.product10);
  }

  public addProduct2(){
    this.store.set(this.product10);
  }
  

}



