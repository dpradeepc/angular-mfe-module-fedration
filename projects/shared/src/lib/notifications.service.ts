import { Injectable } from '@angular/core';
import { Notification } from './models/notification';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  private notifications = [
    {
      id: 1,
      type: "Friend Request",
      from_user: "Sunisith",
      description: "has sent you a friend request"
    },
    {
      id: 2,
      type: "Profile View",
      from_user: "Rakesh Master",
      description: "has viewed your profile"
    },
    {
      id: 3,
      type: "Post Like",
      from_user: "Uppal Balu",
      description: "has liked your post"
    },
    {
      id: 4,
      type: "Profile View",
      from_user: "Sunisith",
      description: "has viewed your profile"
    }
  ]

  constructor() { }

  public getNotifications():Notification[]{
    return this.notifications;
  }

  public addNewNotification(notification: Notification) {
    this.notifications.push(notification);
    return this.notifications;
  }

}

