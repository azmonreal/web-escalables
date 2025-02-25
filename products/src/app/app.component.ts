import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { Product } from './interfaces/product';

@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf, ProductComponent, ProductDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1500,
      inStock: true,
      onSale: false,
      image: 'https://m.media-amazon.com/images/I/816uW9q6BKS.jpg',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 800,
      inStock: true,
      onSale: true,
      image: 'https://m.media-amazon.com/images/I/61aiFCe6PpL.jpg',
    },
    {
      id: 3,
      name: 'Tablet',
      price: 400,
      inStock: false,
      onSale: false,
      image: 'https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg',
    },
    {
      id: 4,
      name: 'Monitor',
      price: 200,
      inStock: true,
      onSale: true,
      image: 'https://m.media-amazon.com/images/I/71+qQN-3KvL.jpg',
    },
    {
      id: 5,
      name: 'Teclado mecánico',
      price: 100,
      inStock: true,
      onSale: false,
      image:
        'https://m.media-amazon.com/images/I/61CJJ297IJL._AC_UF894,1000_QL80_.jpg',
    },
    {
      id: 6,
      name: 'Mouse inalámbrico',
      price: 50,
      inStock: false,
      onSale: false,
      image:
        'https://m.media-amazon.com/images/I/61IpTocy++L._AC_UF894,1000_QL80_.jpg',
    },
    {
      id: 7,
      name: 'Impresora láser',
      price: 250,
      inStock: true,
      onSale: true,
      image: 'https://m.media-amazon.com/images/I/711z8azMSUL.jpg',
    },
    {
      id: 8,
      name: 'Auriculares Bluetooth',
      price: 120,
      inStock: true,
      onSale: false,
      image: 'https://m.media-amazon.com/images/I/51GnygyIEgS.jpg',
    },
    {
      id: 9,
      name: 'Silla ergonómica',
      price: 300,
      inStock: false,
      onSale: true,
      image: 'https://m.media-amazon.com/images/I/71O-02eW61L.jpg',
    },
    {
      id: 10,
      name: 'Micrófono profesional',
      price: 180,
      inStock: true,
      onSale: false,
      image: 'https://m.media-amazon.com/images/I/81atqMlP6zL.jpg',
    },
    {
      id: 11,
      name: 'Disco SSD 1TB',
      price: 220,
      inStock: true,
      onSale: true,
      image: 'https://m.media-amazon.com/images/I/71QygIvKzfL.jpg',
    },
    {
      id: 12,
      name: 'Cámara web 1080p',
      price: 90,
      inStock: true,
      onSale: false,
      image: 'https://m.media-amazon.com/images/I/61-K2lXmHQL.jpg',
    },
    {
      id: 13,
      name: 'Router Wi-Fi 6',
      price: 160,
      inStock: false,
      onSale: true,
      image:
        'https://m.media-amazon.com/images/I/51Q99CZv-SL._AC_UF894,1000_QL80_.jpg',
    },
    {
      id: 14,
      name: 'Tarjeta gráfica RTX 4060',
      price: 500,
      inStock: true,
      onSale: false,
      image: 'https://m.media-amazon.com/images/I/71t1ClD2EtL.jpg',
    },
    {
      id: 15,
      name: 'Smartwatch',
      price: 250,
      inStock: true,
      onSale: true,
      image: 'https://m.media-amazon.com/images/I/617N9LE+4YL.jpg',
    },
  ];

  selectedProduct: Product | null = null;

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }
}
