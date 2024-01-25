import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { WishlistService } from '../demo/service/wishlist.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    items!: MenuItem[];

    constructor(
        public layoutService: LayoutService,
        private _wishListService: WishlistService
    ) {}

    openWishListModal() {
        this._wishListService.setShowWishListModal(true);
    }
}
