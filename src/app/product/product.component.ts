import { Component, OnInit } from '@angular/core';
import { Product } from "../model/product";
import { ProductService } from "../services/product.service";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ShoppingCartItem } from "../model/shoppingCartItem";
import { NgClass, NgFor, NgIf, NgStyle } from "@angular/common";
import { ShoppingCart } from "../model/shoppingCart";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RouterLink,
    NgIf, NgFor, NgClass, NgStyle
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId: number = 0;
  product: Product = new Product();
  item: ShoppingCartItem = new ShoppingCartItem();
  quantity: number = 0;
  stock: number = 0; 
  selectedColor: string = '';
  availableColors: string[] = ['Rouge', 'Bleu', 'Vert'];
  availableSizes: string[] = ['Small', 'Medium', 'Large'];
  
  selectedSize: string = '';
  outOfStockMessage: string = '';
  alertMessage: string = '';

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
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
        console.log('get product : ' + this.product.name);
      }
    )
  }

  add() {
    this.quantity += 1;
  }

  remove() {
    if (this.quantity > 0)
      this.quantity -= 1;
  }

  buy() {

    console.log('component : click add to cart .....');
    console.log("name  : " + this.product.name);
    this.item._product = this.product;
    this.item._quantity = this.quantity;
    this.item.color = this.selectedColor;  // Ajouter la couleur choisie
    this.item.size = this.selectedSize;  
    this.productService.addToCart(this.item );
    this.quantity = 0;
    this.navigateToCart();
  }

  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }

  selectColor(color: string) {
    this.selectedColor = color;
    if (color.toLowerCase() === 'rouge') {
      this. alertMessage = 'This product is out of the stock.';
    } else {
      this. alertMessage = '';
    }
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  getTextColor(color: string): string {
    const darkColors = ['Rouge', 'Bleu', 'Vert'];
    return darkColors.includes(color) ? 'white' : 'black';
  }

  getColorHex(color: string): string {
    switch (color.toLowerCase()) {
      case 'rouge': return '#FF6347';
      case 'bleu': return '#AFEEEE';
      case 'vert': return '#40E0D0';
      default: return '#FFFFFF';
    }
  }
}
