import { Component, signal } from '@angular/core';
import { Product } from './product.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products = signal<Product[]>([
    {
      id: 1,
      name: 'Makeup Brush',
      imageUrl:
        'https://cdn.pixabay.com/photo/2019/10/24/03/31/brush-4573247_1280.jpg',
      price: 300,
      availableQuantity: 20,
    },
    {
      id: 2,
      name: 'Acqua di Gio',
      imageUrl:
        'https://cdn.pixabay.com/photo/2021/08/03/06/47/perfume-6518634_1280.jpg',
      price: 80,
      availableQuantity: 0,
    },
    {
      id: 3,
      name: 'Kit Dove Sensitive',
      imageUrl:
        'https://cdn.pixabay.com/photo/2014/08/10/18/00/razor-414909_1280.jpg',
      price: 25,
      availableQuantity: 8,
    },
  ]);
}
