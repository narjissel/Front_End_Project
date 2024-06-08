import { Component ,OnInit} from '@angular/core';
import { stock_product } from '../stock_product';
import { StockProductService } from '../stock-product.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-stock-product',
  standalone: true,
  imports: [NgIf,NgFor,CurrencyPipe,FormsModule],
  templateUrl: './stock-product.component.html',
  styleUrl: './stock-product.component.css'
})
export class StockProductComponent implements OnInit{

  products: stock_product[] = [];
  newProduct: stock_product = { id: '', category: '', description: '', image: '', name: '', price: 0, title: '' };
  productIdToDelete: string = '';
  productIdToUpdate: string = ''; // Initialisez à une chaîne vide par défaut
  updatedProduct: stock_product = { id: '', category: '', description: '', image: '', name: '', price: 0, title: ''}; 

  constructor(private productService: StockProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data: stock_product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
    this.getProducts();

  }


  getProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data: stock_product[]) => { // Modifier le type de retour
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  onSubmit(): void {
    this.productService.addProduct(this.newProduct).subscribe(
      (data: stock_product) => {
        console.log('Product added successfully:', data);
        this.newProduct = { id: '', category: '', description: '', image: '', name: '', price: 0, title: ''}; // Réinitialiser le formulaire après l'ajout
        this.getProducts(); // Rafraîchir la liste des produits
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.productIdToDelete).subscribe(
      () => {
        console.log('Product deleted successfully');
        this.getProducts(); // Rafraîchir la liste des produits après la suppression
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }


  editProduct(product: stock_product): void {
    // Mettre en œuvre la logique pour modifier un produit
    // Par exemple, vous pouvez ouvrir un formulaire de modification pré-rempli avec les détails du produit sélectionné
  }


}
