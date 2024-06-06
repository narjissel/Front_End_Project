import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { ShoppingCartItem } from '../../model/shoppingCartItem';
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productoffers',
  standalone: true,
  imports: [NgIf, FormsModule, NgFor, NgClass, NgStyle],
  templateUrl: './productoffers.component.html',
  styleUrls: ['./productoffers.component.css']
})
export class ProductoffersComponent implements OnInit {
  productId: number = 0;
  product: Product = new Product();
  item: ShoppingCartItem = new ShoppingCartItem();
  quantity: number = 0;

  availableColors: string[] = ['Rouge', 'Bleu', 'Vert'];
  availableSizes: string[] = ['Small', 'Medium', 'Large'];
  selectedColor: string = '';
  selectedSize: string = '';
  

  

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {}

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
        this.selectedColor = this.availableColors[0];
        this.selectedSize = this.availableSizes[0];
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
    console.log('component: click add to cart .....');
    console.log("name: " + this.product.name);
    this.item._product = this.product;
    this.item._quantity = this.quantity;
    this.productService.addToCart(this.item);
    this.quantity = 0;
    this.navigateToCart();
  }

  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  
  getTextColor(color: string): string {
    // Assuming a simple logic for text color based on the background color.
    const darkColors = ['Rouge', 'Bleu', 'Vert'];
    return darkColors.includes(color) ? 'white' : 'black';
  }

  getColorHex(color: string): string {
    switch(color.toLowerCase()) {
      case 'rouge': return '#FF6347';
      case 'bleu': return '#AFEEEE';
      case 'vert': return '#40E0D0';
      default: return '#FFFFFF'; // Default to white if color not recognized
    }
  }
}
