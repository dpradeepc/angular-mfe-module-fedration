import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  public isAuthenticated:Boolean =true;
  public profile = {
    name : "pradeep",
    email : "dpradeepc@gmail.com"
  }
  public currentDate = Date.now()

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
