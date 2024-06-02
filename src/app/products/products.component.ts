import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products : Array<Product> = [];

  constructor(private productService : ProductService, private router: Router) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){

    this.productService.getProducts()
      .subscribe({
        next : data => this.products=data,
        error : err => {
          console.log(err);
        }
      });

    //this.products$ =this.productService.getProducts();
  }

  navigateToProductDetail(productId: string): void {
    this.router.navigate(['/product', productId]);
    
  }

}
