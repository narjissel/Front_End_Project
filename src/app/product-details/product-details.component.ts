import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../model/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input() product!: Product;

  @Output() buy = new EventEmitter()

  getImageUrl(product: Product){
    return '/assets/images/'+ product.image ;
  }

  byButtonClicked(product: Product){
    this.buy.emit()

  }
}
