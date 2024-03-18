import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';  
import { ProductData } from '../products'; // Import your ProductData model if it's in a different file
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],

})
export class OrderComponent {
  product: ProductData; // This should be the product passed from the product list component
  quantity: number; // This will be bound to the input field for the quantity
  Orderl = 'https://uiexercise.theproindia.com/api/Order/AddOrder'; // Replace with your actual order API endpoint

  constructor(private http: HttpClient, private router: Router) {
    // Get the product data passed from the navigation state
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras.state?.['product'];
    this.quantity = 1; 
  }

  confirmPurchase() {
    if (this.product.Quantity < this.quantity || this.product.Quantity <= 0 || this.quantity <= 0) {
      alert("Quantity either exceeded or insufficient");
    } else {
      let process = {
        customerId: 'd2d5cc60-349e-4759-9bf0-c2804f05ac55', // Replace with actual customer ID if needed
        productId: this.product.ProductId,
        quantity: this.quantity
      };

      this.http.post(this.Orderl, process).subscribe(
        res => {
          alert('Added successfully');
          // Navigate to the product list component, update the path as needed
          this.router.navigate(['/ProductList']);
        },
        err => {
          alert('An error occurred: ' + err.message);
        }
      );
    }
  }
}
