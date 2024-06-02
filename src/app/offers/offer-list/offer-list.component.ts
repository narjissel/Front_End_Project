import { Component,OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { Router } from 'express';
import {Router} from "@angular/router";
import { OfferDialogComponent } from '../offer-dialog/offer-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule],
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.css'
})
export class OfferListComponent implements OnInit {
  offers: any[] = [];

  constructor(private offerService: OfferService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.offers = this.offerService.getOffers();
    this.openOfferDialogs();
  }

  navigateToProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  openOfferDialogs(): void {
    this.offers.forEach(offer => {
      this.dialog.open(OfferDialogComponent, {
        data: offer
      });
    });
  }
}