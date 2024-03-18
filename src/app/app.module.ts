import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { withComponentInputBinding, Routes ,provideRouter} from '@angular/router';
import { RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
// import { SearchProductComponent } from './search-product/search-product.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    CartComponent
    
    // SearchProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListComponent,
    HttpClientModule,
    AddProductComponent,
    FormsModule,
    RouterModule,

    // SearchProductComponent
  ],
 
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
