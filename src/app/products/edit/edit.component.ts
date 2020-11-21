import { Component } from '@angular/core';
import { Product } from 'src/app/products/product.model';
import { StoreService } from '../../store/store.service';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  title = 'elektro';

  products: Product[] = [];
  constructor(
    protected _storeService: StoreService
  ) { }

  ngOnInit() {
    this.products = this._storeService.getMyStoreData()
  }

  onSubmit() {

  }
}
