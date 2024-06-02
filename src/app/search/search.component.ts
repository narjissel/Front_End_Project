import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
//import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import {ProductService} from "../services/product.service";
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchProductTitle: string = '';
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchProductTitle = params['title'] || '';
      if (this.searchProductTitle) {
        this.searchProducts();
      }
    });
  }

  searchProducts() {
    if (this.searchProductTitle.trim() !== '') {
      this.productService.searchProducts(this.searchProductTitle).subscribe(
        (products: Product[]) => {
          this.products = products;
        },
        error => {
          console.error('Error fetching search results:', error);
        }
      );
    }
  }
}