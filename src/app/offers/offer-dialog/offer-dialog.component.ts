import { Component ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-offer-dialog',
  standalone: true,
  imports: [],
  templateUrl: './offer-dialog.component.html',
  styleUrl: './offer-dialog.component.css'
})
export class OfferDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  navigateToProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

}
