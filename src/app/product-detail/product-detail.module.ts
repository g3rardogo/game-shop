import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailRoutingModel } from './product-detail.routing.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, ProductDetailRoutingModel],
})
export class ProductDetailModule {}
