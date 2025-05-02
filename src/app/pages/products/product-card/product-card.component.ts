import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Product } from '../product.model';
import { ButtonComponent } from '../../../shared/button/button.component';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, ButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input.required<Product>();

  constructor(private cartService: CartService) {}
  addProductToCart() {
    this.cartService.addToCart(this.product());
  }
}
