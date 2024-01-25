import { Component } from '@angular/core';
import { WishlistService } from '../../service/wishlist.service';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrl: './wishlist.component.scss',
    standalone: false,
})
export class WishlistComponent {
    showModal$: Observable<boolean>;
    wishList$: Observable<any>;
    constructor(private _wishListService: WishlistService) {
        this.showModal$ = this._wishListService.showWishListModal$;
        this.wishList$ = this._wishListService.getWishList();
    }

    closeModal() {
        this._wishListService.setShowWishListModal(false);
    }
}
