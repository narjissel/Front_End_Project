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
      productId: 7,
      price: 2000, // Prix spécifique pour l'offre 1
      image: 'https://i.pinimg.com/564x/48/7d/9a/487d9a189283af451786206f57ff1685.jpg',
      expiryDate: new Date('2024-07-01'), // Date d'expiration de l'offre 1
      
    },
    {
      id: 2,
      title: 'Remise spéciale sur les nouveaux arrivages',
      description: 'Nouvelle collection avec 30% de remise.',
      productId: 8,
      price: 5000, // Prix spécifique pour l'offre 1
      image: 'https://i.pinimg.com/564x/27/18/ba/2718ba06dfbb43397ed3dd3ae7487079.jpg',
      expiryDate: new Date('2024-08-15'), // Date d'expiration de l'offre 2
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
