// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductData } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<ProductData[]>([]);
  
  cart$ = this.cart.asObservable();

  addToCart(product: ProductData, quantity: number) {
    const currentCart = this.cart.getValue();
    const productExists = currentCart.find(p => p.ProductId === product.ProductId);

    if (productExists) {
      productExists.Quantity += quantity;
    } else {
      const cartProduct = { ...product, Quantity: quantity };
      currentCart.push(cartProduct);
    }
    
    this.cart.next(currentCart);
  }

  removeFromCart(productId: string) {
    const currentCart = this.cart.getValue().filter(p => p.ProductId !== productId);
    this.cart.next(currentCart);
  }
  

  
}
