import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { ButtonTheme } from '../../shared/button/button-theme.model';
import { CartCardComponent } from './cart-card/cart-card.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CartCardComponent, ButtonComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartService = inject(CartService);
  totalValue = computed(() => {
    return this.cartService
      .cart()
      .reduce((cartValue, product) => cartValue + product.price, 0);
  });
}
