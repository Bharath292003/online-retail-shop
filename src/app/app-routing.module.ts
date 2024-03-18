import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';

const approute: Routes = [
  { path: '', redirectTo: 'ProductList', pathMatch: 'full' },
  { path: 'ProductList', component: ProductListComponent },
  { path: 'AddProduct', component: AddProductComponent },
  {path: 'Orderproduct' ,component:OrderComponent },
  {path: 'Addtocart',component:CartComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(approute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
