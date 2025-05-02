import { Component } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';
import { ProductsComponent } from './pages/products/products.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
