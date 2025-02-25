import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [NgClass, NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
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
