import { Component } from '@angular/core';
import { WishlistService } from '../../service/wishlist/wishlist.service';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Courses } from '../../model/course';
import { CartService } from '../../service/cart/cart.service';
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
        private _messageService: MessageService,
        private _cartListService: CartService
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

    addToCart(course: Courses) {
        if (course.cart) {
            this._messageService.add({
                severity: 'error',
                summary: 'Already in Cart',
                detail: `${course.title} already in your cart`,
            });
            return;
        }
        course.cart = true;
        this._cartListService.setCartList(course);
        this._messageService.add({
            severity: 'success',
            summary: 'Cart',
            detail: `${course.title} added to your cart`,
        });
        this.deleteWishList(course);
    }
}
