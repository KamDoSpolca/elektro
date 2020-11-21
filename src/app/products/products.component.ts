import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../store/store.service';
import { Product } from 'src/app/products/product.model';

@Component({
  selector: 'elektro-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  title = 'elektro';
  products: Product[] = [];
  filter: string;

  constructor(
    private _router: Router,
    protected _storeService: StoreService
  ) { }

  ngOnInit() {
    // TODO
    this.products = this._storeService.getMyStoreData()

  }
}
