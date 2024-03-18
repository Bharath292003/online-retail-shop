import { Component } from '@angular/core';
import { NgFor,JsonPipe,NgIf} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductData } from '../products';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  standalone:true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [NgFor,JsonPipe,NgIf,FormsModule]
})
export class ProductListComponent {
   readonly getch = 'https://uiexercise.theproindia.com/api/Product/GetAllProduct'
   products : ProductData[]=[];
   display=false;
   searchTerm: string = '';
  filteredProducts: ProductData[] =[];
  //  products: any[] = []; 
  
  filterProducts() {
    this.filteredProducts = this.searchTerm
      ? this.products.filter(product =>
          product.ProductName?.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      : this.products;
  }
   constructor(private https:HttpClient, private router: Router,private cartService: CartService){
    this.Plist()
   }
   Plist(){
    this.display=true;
    this.https.get<ProductData[]>(this.getch).subscribe((res)=>{
      this.products = res;
      this.filteredProducts = res;
    })
   }  
   addToCart(product: ProductData) {
    this.router.navigate(['/Orderproduct'], { state: { product } });

  }
  finalcart(product: ProductData){
    const quantityToAdd = prompt(`Enter the quantity for ${product.ProductName}:`, '1');
    const quantity = Number(quantityToAdd);

    if (quantity <= 0 || isNaN(quantity)) {
      alert('Invalid quantity.');
      return;
    }
    
    if (product.Quantity >= quantity) {
      this.cartService.addToCart(product, quantity);
      this.router.navigate(['/Addtocart'], { state: { product } });
    } else {
      alert('Not enough stock available.');
    }
    
    
  }
  
   

}
