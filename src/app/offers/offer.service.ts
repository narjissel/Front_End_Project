import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private offers = [
    {
      id: 1,
      title: 'Promotion 50% sur tous les produits',
      description: 'Profitez de 50% de réduction sur tous nos produits.',
      productId: 3
    },
    {
      id: 2,
      title: 'Remise spéciale sur les nouveaux arrivages',
      description: 'Nouvelle collection avec 30% de remise.',
      productId: 1
    }
  ];

  constructor() { }

  getOffers() {
    return this.offers;
  }

  getOfferById(id: number) {
    return this.offers.find(offer => offer.id === id);
  }

}
