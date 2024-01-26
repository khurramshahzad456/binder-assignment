import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { WishlistService } from '../demo/service/wishlist/wishlist.service';
import { CartService } from '../demo/service/cart/cart.service';
import { ProfileService } from '../demo/service/profile/profile.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    items!: MenuItem[];

    constructor(
        public layoutService: LayoutService,
        private _wishListService: WishlistService,
        private _cartListService: CartService,
        private _profileService: ProfileService
    ) {}

    openWishListModal() {
        this._wishListService.setShowWishListModal(true);
    }
    openCartListModal() {
        this._cartListService.setShowCartModal(true);
    }
    openProfileModal() {
        this._profileService.setProfileModal(true);
    }
}
