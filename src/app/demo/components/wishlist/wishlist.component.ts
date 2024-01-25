import { Component } from '@angular/core';
import { WishlistService } from '../../service/wishlist.service';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Courses } from '../../model/course';
@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrl: './wishlist.component.scss',
    standalone: false,
})
export class WishlistComponent {
    showModal$: Observable<boolean>;
    wishList$: Observable<any>;
    constructor(
        private _wishListService: WishlistService,
        private _messageService: MessageService
    ) {
        this.showModal$ = this._wishListService.showWishListModal$;
        this.wishList$ = this._wishListService.getWishList();
    }

    closeModal() {
        this._wishListService.setShowWishListModal(false);
    }

    deleteWishList(course: Courses) {
        this._wishListService.deleteWishList(course);
        this._messageService.add({
            severity: 'success',
            summary: 'Wishlist',
            detail: `${course.title} removed from your wishlist`,
        });
    }
}
