import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { NgModel,NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-product',standalone:true,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
  imports:[FormsModule]
})
export class AddProductComponent {
  readonly addlink="https://uiexercise.theproindia.com/api/Product/AddProduct";
  constructor(private https:HttpClient){}
  
  addproduct(pro:{Pname:string,Pquantity:number}){
    
    this.https.post(this.addlink,{  
      ProductName:pro.Pname,
      Quantity:pro.Pquantity,
      IsActive:true
    }).subscribe((res)=>{
      console.log(res);})
}
   add(){
    alert('added successfully')
   }
}
