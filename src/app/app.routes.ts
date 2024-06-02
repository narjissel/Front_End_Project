import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {ProductComponent} from "./product/product.component";
import { FeedbackComponent } from './feedback/feedback.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomComponent } from './welcom/welcom.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { InvoiceManagementComponent } from './invoice-management/invoice-management.component';
import { OfferDetailComponent } from './offers/offer-detail/offer-detail.component';
import { OfferListComponent } from './offers/offer-list/offer-list.component';
import { OfferDialogComponent } from './offers/offer-dialog/offer-dialog.component';
//import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
  {path : '', component: WelcomComponent},
  {path : "home", component : HomeComponent},
  //{path : 'catalog', component : CatalogComponent, title: 'My Catalog products'},
  {path: "catalog" , component: CatalogComponent}  ,
  {path: "catalog/:title" , component: CatalogComponent}  ,
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  {path: "catalog/:name" , component: CatalogComponent}  ,
 // {path : 'product-details', component :ProductDetailsComponent, title: 'Product details'},
 {path : 'details' , component: ProductDetailsComponent},
  {path : "products", component : ProductsComponent},
  
  
  {path : "cart" , component : ShoppingCartComponent},
  {path : "product/:id" , component : ProductComponent},
  {path : "feedback", component : FeedbackComponent},
  {path : "navbar" , component : NavbarComponent},
  {path: "login", component : LoginComponent},
  //{path: "search/:productTitle", component : SearchComponent}
  { path: 'search', component: SearchComponent },
  { path: 'search/:title', component: SearchComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },

  { path: 'details/:id', component: ProductDetailsComponent },
  
  {path : "invoicemanagement", component : InvoiceManagementComponent},
 // { path: '', component: OfferListComponent },
  { path: "product/:id", component: ProductComponent }
  
  
  
  
];
