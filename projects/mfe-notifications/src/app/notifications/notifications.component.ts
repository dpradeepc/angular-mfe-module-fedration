import { Component, OnInit } from '@angular/core';
import { Notification } from 'projects/shared/src/lib/models/notification';
import { CartService, Product, NotificationService } from '@shared';

interface CartProduct {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./styles.css']
})
export class NotificationsComponent implements OnInit {

  public items: CartProduct[] = [];
  public totalItems = 0;
  public notifications:Notification[] = [];
  public numNotifications = 0;

  constructor(private notificationService: NotificationService, private CartService: CartService) { }

  ngOnInit(): void {
    const CartItems = this.CartService.getCartItems();
    this.notifications = this.notificationService.getNotifications();
    this.numNotifications = this.notifications.length;
    this.items = CartItems
        .reduce((acc, cur) => {
          const idx = acc.findIndex(p => p.product.id === cur.id);
          idx !== -1 ? acc[idx].quantity++ : acc.push({product: cur, quantity: 1});
          return acc;
        }, [] as CartProduct[]);

    this.totalItems = CartItems.length;
  }
}
