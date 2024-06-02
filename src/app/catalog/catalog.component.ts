/////////////////////////////////////////////////
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';
import { Product } from '../model/product';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { ShoppingCart } from '../model/shoppingCart';
import { ShoppingCartItem } from '../model/shoppingCartItem';
import { ProductService } from '../services/product.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-catalog',
    standalone: true,
    templateUrl: './catalog.component.html',
    styleUrl: './catalog.component.css',
    imports: [CommonModule, ProductDetailsComponent, RouterLink, RouterLinkActive],
    providers: [ShoppingCartItem] 
})
export class CatalogComponent implements OnInit {
  
  products: Product[] = [];
  filteredProducts: Product[] = [];
  //carts: Product[] = []

  //private cartService: CartService = inject(CartService)

  @Input()
  myValue : string = "";
  filter: string = ""

  constructor(
    
   // private cartService: ProductService, 
    private productService: ProductService,
    private shoppingCartService: ShoppingCartItem,
    private router: Router,
    private route: ActivatedRoute,
    ){  
  }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
        this.route.queryParams.subscribe(params => {
          this.filter = params['filter'] || 'All';
          this.filteredProducts = this.getFilteredProducts();
        });
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }
  
 
  addToCart(product: Product): void {
    const item: ShoppingCartItem = new ShoppingCartItem();
    item._product = product;
    item._quantity = 1;
    this.router.navigate(['/cart']);
  }
/*
  getFilteredProducts(): Product[] {
    return this.filter === ''
      ? this.products
      : this.products.filter(product => product.description=== this.filter);
  }
  */

  getFilteredProducts(): Product[] {
    if (!this.filter || this.filter === 'All') {
      return this.products;
    } else {
      return this.products.filter(product => product.category.toLowerCase() === this.filter.toLowerCase());
    }
  }
    
/*
  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
        (product: any) => product._category === this.filter
      );
  }
  */
/*
  filterProductsByTitle(description: string): void {
    // Si aucun filtre n'est saisi, afficher tous les produits non filtrés
    if (!description.trim()) {
      this.filteredProducts = this.products;
    } else {
      // Filtrer les produits par titre en utilisant la méthode includes pour une correspondance partielle
      this.filteredProducts = this.products.filter(product => product.description.toLowerCase().includes(description.toLowerCase()));
    }
  }*/
/*
  filterProductsByTitle(category: string): void {
    if (!category) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.catalog.toLowerCase() === category.toLowerCase());
    }
  }*/

  
  
  
/*
  getProductImage(productId: string): string | undefined {
    // Récupérer le produit correspondant à l'ID
    const product = this.products.find(p => p.id  === productId);
    // Si le produit est trouvé, retourner l'URL de l'image, sinon, retourner undefined
    return product ? product.image : undefined;
  }*/
  getProductImage(productId: string): string {
    // Récupérer le produit correspondant à l'ID
    const product = this.products.find(p => p.id  === productId);
    // Si le produit est trouvé, retourner l'URL de l'image, sinon, retourner une chaîne vide
    return product ? product.image : '';
  }

}
