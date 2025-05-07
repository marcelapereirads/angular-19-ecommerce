import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../products/product.model';
import { ButtonComponent } from '../../../shared/button/button.component';
import { CurrencyPipe } from '@angular/common';
import { ButtonTheme } from '../../../shared/button/button-theme.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-card',
  imports: [CurrencyPipe, ButtonComponent],
  templateUrl: './cart-card.component.html',
})
export class CartCardComponent {
  product = input.required<Product>();
  productIdx = input.required<number>();

  cartService = inject(CartService);

  readonly ButtonTheme = ButtonTheme;
}
