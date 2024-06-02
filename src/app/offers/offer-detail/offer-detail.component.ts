import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from '../offer.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-offer-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './offer-detail.component.html',
  styleUrl: './offer-detail.component.css'
})
export class OfferDetailComponent implements OnInit  {

  offer: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private offerService: OfferService
  ) { }

  ngOnInit(): void {
    const offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.offer = this.offerService.getOfferById(offerId);
  }

  navigateToProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
  

}
