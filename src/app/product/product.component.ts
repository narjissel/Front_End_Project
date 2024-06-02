import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {ShoppingCartItem} from "../model/shoppingCartItem";
import {NgIf} from "@angular/common";
import {ShoppingCart} from "../model/shoppingCart";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  productId: number = 0;
  product : Product = new Product();
  item : ShoppingCartItem = new ShoppingCartItem();
  quantity : number = 0;
  constructor(private route: ActivatedRoute,private productService : ProductService,private router: Router) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.getProduct(this.productId);
    });

  }


  private getProduct(productId: number) {
    this.productService.getProduct(productId).subscribe(
      product => {
        this.product = product;
        console.log('get product : '+this.product.name);
      }
    )
  }

  


  add() {
    this.quantity += 1;
  }

  remove() {
    if(this.quantity > 0)
      this.quantity -= 1;
  }

  buy() {
    console.log('component : click add to cart .....');
    console.log("name  : "+this.product.name);
    this.item._product = this.product;
    this.item._quantity = this.quantity;
    this.productService.addToCart(this.item);
    this.quantity = 0;
    this.navigateToCart();
  }

  navigateToCart(): void {
    this.router.navigate(['/cart']);
   // this.router.navigate(['/feedback']);
  }
}
