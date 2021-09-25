import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart() {
    console.log('anadir al carrito');
    this.productClicked.emit(this.product.id);
  }

  constructor() {}

  ngOnInit(): void {}
}
