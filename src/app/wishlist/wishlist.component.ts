/**
 * Title: wishlist.components.ts
 * Author: Oksana Kustova
 * Date: 02/13/2022
 * Description: WishListComponent.
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  items: Array<IWishlistItem> = [];

  constructor() {}

  ngOnInit(): void {}

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
