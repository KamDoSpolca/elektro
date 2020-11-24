import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'elektro-stores',
  templateUrl: './mystore.component.html',
  styleUrls: ['./mystore.component.scss']
})
export class MyStoreComponent implements OnInit {

  products: Product[] = [];
  filter: string;
  constructor(
    protected _storeService: StoreService
  ) { }

  ngOnInit() {
    // TODO
    this.products = this._storeService.getMyStoreData()


    // TODO
      //.then(res => {
      //  alert(res);
      //})

  }
}


