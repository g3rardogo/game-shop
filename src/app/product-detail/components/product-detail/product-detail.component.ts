import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchDetailProduct(id);
    });
  }

  fetchDetailProduct(id: string) {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }
}
