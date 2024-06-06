import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {ShoppingCart} from "../model/shoppingCart";
import {NgForOf} from "@angular/common";
import {ShoppingCartItem} from "../model/shoppingCartItem";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    NgForOf,RouterLink
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit{
  totalPrice: number = 0; 
  cart : ShoppingCart = new ShoppingCart();
  constructor(private productService : ProductService, private router: Router) {
  }

  ngOnInit() {
    this.cart = this.productService.cart;
    this.totalPrice = this.productService.calculateTotalPrice(); 
  }

 


  deleteProduct(item: ShoppingCartItem) {
    
    this.productService.deleteProduct(item);
  }

  
  saveCart(cart: ShoppingCart) {
    console.log('component :  saving cart')
    this.productService.saveCart();
    this.navigateToCart(); // Redirige vers le composant invoice-management
  }
  navigateToCart(): void {
    this.router.navigate(['/invoicemanagement']);
  }

}
