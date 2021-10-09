import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickedProduct(id: number) {
    console.log('product id:', id);
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      const productsResponse: Product[] = products;
      const response = productsResponse.slice(0, 6);
      this.products = response;
      console.log(this.products);
    });
  }
}
