import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', loadChildren: () => import('mfeCart/Module').then(m => m.CartModule) },
  { path: 'profile', loadChildren: () => import('mfeProfile/Module').then(m => m.ProfileModule) },
  { path: 'notifications', loadChildren: () => import('mfeNotifications/Module').then(m => m.NotificationsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
