// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductData } from '../products';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: ProductData[] = [];

  constructor(private cartService: CartService,private https:HttpClient) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(cartProducts => {
      this.cartProducts = cartProducts;
    });
  }

  removeFromCart(productId: string) {
    this.cartService.removeFromCart(productId);
  }

  confirmPurchase(product:ProductData) {
    
    alert('You have purchased the items.');

    console.log(product)
    this.https.post('https://uiexercise.theproindia.com/api/Order/AddOrder',{
      CustomerId:'457b5ccc-1ec5-49b3-a849-08dc44a922b3',
      ProductId:product.ProductId,
      Quantity:product.Quantity}).subscribe((res)=>{console.log(res)});
  }
}
