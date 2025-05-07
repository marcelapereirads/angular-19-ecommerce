import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { ButtonTheme } from '../../shared/button/button-theme.model';
import { CartCardComponent } from './cart-card/cart-card.component';

@Component({
  selector: 'app-cart',
  imports: [CartCardComponent],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartService = inject(CartService);
}
