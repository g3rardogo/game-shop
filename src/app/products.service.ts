import { Injectable } from '@angular/core';
import { Product } from './core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/cyberpunk.jpg',
      title: 'Cyberpunk',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '2',
      image: 'assets/images/dead-space.jpg',
      title: 'Dead Space',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '3',
      image: 'assets/images/destiny.png',
      title: 'Destiny',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '4',
      image: 'assets/images/fifa-21.jpg',
      title: 'FIFA 21',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '5',
      image: 'assets/images/mortal-kombat.jpg',
      title: 'Mortal Kombat',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '6',
      image: 'assets/images/spiderman.jpg',
      title: 'Spider-Man',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
  ];

  constructor() {}

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find((item) => id === item.id);
  }
}
