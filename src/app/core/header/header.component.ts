import { Component, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ButtonTheme } from '../../shared/button/button-theme.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  cartButtonLabel = 'View Cart';
  cartService = inject(CartService);

  readonly ButtonTheme = ButtonTheme;
}
