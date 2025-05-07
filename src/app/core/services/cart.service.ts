import { Injectable, signal } from '@angular/core';
import { Product } from '../../pages/products/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(productIdx: number) {
    const currentCart = this.cart();

    currentCart.splice(productIdx, 1);
    this.cart.set([...currentCart]);
  }
}
