import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from './../../Models/Product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input()
  productListComp: ProductListComponent = undefined;

  product: Product;

  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }
}
