import { Component } from '@angular/core';
import { WishlistService } from '../../service/wishlist.service';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrl: './wishlist.component.scss',
    standalone: false,
})
export class WishlistComponent {
    showModal$: Observable<boolean>;
    constructor(private _wishListService: WishlistService) {
        this.showModal$ = this._wishListService.showWishListModal$;
    }

    closeModal() {
        this._wishListService.setShowWishListModal(false);
    }
}
