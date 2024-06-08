import { Component,OnInit } from '@angular/core';
import { User } from '../../user/user';
import { AdminService } from '../admin.service';
import { Product } from '../../model/product';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { useradmin } from '../../model/useradmin';
import { stock_product } from '../../stock-product/stock_product';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NgIf,NgFor,CurrencyPipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  users: User[] = [];
  products: Product[] = [];
  productss: stock_product[] = [];
  admins: useradmin[] = [];

  constructor(private adminService: AdminService,private router: Router ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getProducts();
    this.getAdmins();
  }

  getUsers(): void {
    this.adminService.getUsers()
      .subscribe(users => this.users = users);
  }

  getProducts(): void {
    this.adminService.getProducts()
      .subscribe(products => this.products = products);
  }

  
  getAdmins(): void {
    this.adminService.getUserAdmin()
      .subscribe(admins => {
        this.admins = admins;
        console.log('Admins:', this.admins); // Affiche les admins récupérés dans la console
      });
  }

}
