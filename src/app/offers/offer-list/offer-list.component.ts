import { Component,OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { Router } from 'express';
import {Router} from "@angular/router";
import { OfferDialogComponent } from '../offer-dialog/offer-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule, CommonModule],
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.css'
})
export class OfferListComponent implements OnInit {
  offers: any[] = [];

  constructor(private offerService: OfferService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.offers = this.offerService.getOffers();
    this.openOfferDialogs();
    //this.startCountdowns();
  }
/*
  
  // Démarrez le compte à rebours pour chaque offre
  startCountdowns() {
    this.offers.forEach((offer, index) => {
      const currentTime = new Date().getTime();
      const expiryTime = offer.expiryDate.getTime();
      const distance = expiryTime - currentTime;

      if (distance > 0) {
        setInterval(() => {
          const currentTime = new Date().getTime();
          const distance = expiryTime - currentTime;

          // Calculez les jours, heures, minutes et secondes restants
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Mettez à jour le compte à rebours dans le modèle
          this.offers[index].countdown = `${days}j ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
      } else {
        // Si l'offre est expirée, affichez un message approprié
        this.offers[index].countdown = 'Offre expirée';
      }
    });
  }
*/

  navigateToProduct(productId: number): void {
    this.router.navigate(['/productoffer', productId]);
  }

  openOfferDialogs(): void {
    this.offers.forEach(offer => {
      this.dialog.open(OfferDialogComponent, {
        data: offer
      });
    });
  }

  currentOfferIndex = 0;

  previousOffer() {
    if (this.currentOfferIndex > 0) {
      this.currentOfferIndex--;
    }
  }

  nextOffer() {
    if (this.currentOfferIndex < this.offers.length - 1) {
      this.currentOfferIndex++;
    }
  }
/*
  navigateToProduct(productId: number) {
    // Implémentez la navigation vers la page du produit
    console.log('Navigating to product with ID:', productId);
  }*/
}