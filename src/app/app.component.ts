import { Component } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';
import { ProductsComponent } from './pages/products/products.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
