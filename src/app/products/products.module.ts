import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products.routing.module';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [ProductComponent, ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, MaterialModule],
})
export class ProductsModule {}
