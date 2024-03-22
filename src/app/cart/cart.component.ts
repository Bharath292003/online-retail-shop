// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductData } from '../products';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // cartProducts = [];
  celebrationActive = false;
  cartProducts: ProductData[] = [];
  showTick = false;

  constructor(private cartService: CartService,private https:HttpClient,private router:Router,private toast:ToastrService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(cartProducts => {
      this.cartProducts = cartProducts;
    });
  }

  removeFromCart(productId: string) {
    this.cartService.removeFromCart(productId);
  }

  confirmPurchase(product:ProductData) {

    this.toast.success('purchased','product');
    alert('You have purchased the items.');
    this.https.post('https://uiexercise.theproindia.com/api/Order/AddOrder',{
      CustomerId:'457b5ccc-1ec5-49b3-a849-08dc44a922b3',
      ProductId:product.ProductId,
      Quantity:product.Quantity}).subscribe((res)=>{;
      console.log(res)});
      this.celebrationActive = true;
        setTimeout(() => {
            this.celebrationActive = false;
        }, 1000); 
        setTimeout(() => {
          this.showTick = true;
          setTimeout(() => {
              this.showTick = false;
          }, 2000); 

      }, 1000); 
  }

}

