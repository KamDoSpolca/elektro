import { Component, OnInit } from '@angular/core';
import { Stores } from '../stores.model';
import { StorelistService  } from '../storelist.service';

@Component({
  selector: 'elektro-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
  stores: Stores[] = [];

  constructor(
    protected _storeService: StorelistService 
  ) { }

  ngOnInit() {

    this.stores = this._storeService.getMyStoreData()

  }
}
