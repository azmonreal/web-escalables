import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  @Input()
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    inStock: false,
    onSale: false,
    image: '',
  };
}
