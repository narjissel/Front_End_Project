import { Component, inject, OnInit } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule, NgForOf} from "@angular/common";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {ProductService} from "./services/product.service";
import { AuthModule, User, } from '@auth0/auth0-angular';
import { FormsModule, NgModel } from '@angular/forms';
import { routes } from './app.routes';
import { provideAuth0  } from '@auth0/auth0-angular';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLinkActive } from '@angular/router';
import { WelcomComponent } from './welcom/welcom.component';
import { LoginComponent } from './login/login.component';
//import { Router } from 'express';
import { AuthService } from './Service_Auth/auth.service';
import { authInterceptor } from './Service_Auth/auth.interceptor';
import { pipe } from 'rxjs';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Router } from '@angular/router';
import { InvoiceManagementComponent } from './invoice-management/invoice-management.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OfferDetailComponent } from './offers/offer-detail/offer-detail.component';
import { OfferService } from './offers/offer.service';
import { OffersModule } from './offers/offers.module';
import { OfferListComponent } from './offers/offer-list/offer-list.component';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { ProductoffersComponent } from './offers/productoffers/productoffers.component';
import { RegisterComponent } from './register/register.component';
import { LoginUserComponent } from './login-user/login-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgForOf,HttpClientModule,
    AuthModule, HomeComponent, CatalogComponent, NavbarComponent, FooterComponent, RouterLinkActive, WelcomComponent,
    LoginComponent, CommonModule,ProductDetailsComponent,FormsModule,InvoiceManagementComponent,OfferDetailComponent,OffersModule,OfferListComponent,
    UserModule,UserCreateComponent,ProductoffersComponent,RegisterComponent,LoginUserComponent

],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    ProductService,
    ShoppingCartComponent,
    OfferService,
    UserService
  ]
  
})
export class AppComponent {

  public searchProductTitle: string = "";

  constructor(private router: Router,) {}


  authService = inject(AuthService)
  user?: any;
  
  searchProducts() {
    if (this.searchProductTitle.trim() !== '') {
      this.router.navigate(['/search', this.searchProductTitle]);
    }
  
   

 // constructor(){
    // this.authService.login({
    //   email: 'nono@mail.com',
    //   password: 'changeme',
    // }).subscribe((r) => {
    //  this.authService.getCurrentAuthUser().subscribe((r) => {
    //   console.log(r);
    //   this.user = r ;
    //  });
      
    // })
  }

  actions : Array<any> = [
    {title : "Products", "route" : "/products"},
    {title: "Cart", "route": "/cart"},
    {title: "feedback", "route": "/feedback"},
    {title : "navbar" , "route" : "/navbar"},
    {title: "home" , "route" : "/home"},
    {title: "login" , "route": "/login"},
    {title: "search" , "route": "/search"},
    {title: "details", "route": "/details"},
    {title: "invoicemanagement", "route": "/invoicemanagement"},
    {title: "register", "route": "/register"},
    {title: "productoffer","route":"/productoffer"},
    {title: "enregistrer","route":"/enregistrer"},
    {title: "login_user","route":"/login_user"},
    
    
    //{title : "catalog" , "route" : "/catalog"},
  ];
  title = 'E-commerce';
  //currentAction : any;
  //setCurrentAction(action: any) {
    //this.currentAction = action;
  //}
}

