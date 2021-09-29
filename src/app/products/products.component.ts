import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
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

  ngOnInit(): void {}

  clickedProduct(id: number) {
    console.log('product id:', id);
  }
}
