import { Component,OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-invoice-management',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './invoice-management.component.html',
  styleUrl: './invoice-management.component.css'
})
export class InvoiceManagementComponent implements OnInit {

  // Déclarer les propriétés pour les détails de la carte de crédit
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';

  paypalEmail: string = '';

  totalPrice: number = 0;
  customerName: string = '';
  customerEmail: string = '';
  customerPhone: string = '';
  customerAddress: string = '';
  paymentMethod: string = '';
  
  
  constructor(private cartShop: ShoppingCartComponent, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    //this.totalPrice = this.cartShop.priceOfAll();
    this.totalPrice = this.productService.calculateTotalPrice(); // Obten
  }
 
  onSubmit() {
    if (this.isFormValid()) {
      // Handle the form submission and payment processing
      console.log('Payment submitted', {
        customerName: this.customerName,
        customerEmail: this.customerEmail,
        customerPhone: this.customerPhone,
        customerAddress: this.customerAddress,
        paymentMethod: this.paymentMethod,
        totalPrice: this.totalPrice
      });
      // Redirect to a confirmation page or show a success message
      this.router.navigate(['/confirmation']); // Assurez-vous que '/confirmation' est une route valide
    } else {
      console.log('Form is not valid');
    }
  }

  isFormValid(): boolean {
    return this.customerName !== '' && this.customerEmail !== '' &&
           this.customerPhone !== '' && this.customerAddress !== '' &&
           this.paymentMethod !== '';
  }
}
