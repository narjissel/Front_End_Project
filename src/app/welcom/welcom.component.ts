import { Component } from '@angular/core';
import { OfferListComponent } from '../offers/offer-list/offer-list.component';

@Component({
  selector: 'app-welcom',
  standalone: true,
  imports: [OfferListComponent],
  templateUrl: './welcom.component.html',
  styleUrl: './welcom.component.css'
})
export class WelcomComponent {

}
