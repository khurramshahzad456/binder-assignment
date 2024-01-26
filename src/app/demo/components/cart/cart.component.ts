import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Courses } from '../../model/course';
import { CartService } from '../../service/cart/cart.service';
import { WishlistService } from '../../service/wishlist/wishlist.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss',
    standalone: false,
})
export class CartComponent {
    showModal$: Observable<boolean>;
    cartList$: Observable<any>;
    constructor(
        private _cartListService: CartService,
        private _messageService: MessageService,
        private _wishListService: WishlistService
    ) {
        this.showModal$ = this._cartListService.showCartModal$;
        this.cartList$ = this._cartListService.getCartList();
    }

    closeModal() {
        this._cartListService.setShowCartModal(false);
    }

    deleteCart(course: Courses) {
        this._cartListService.deleteCart(course);
        this._messageService.add({
            severity: 'success',
            summary: 'Cart',
            detail: `${course.title} removed from your cart`,
        });
    }

    addToWishList(course: Courses) {
        if (course.wishlist) {
            this._messageService.add({
                severity: 'warning',
                summary: 'Wishlist',
                detail: `${course.title} is already in your wishlist`,
            });
            return;
        }
        course.wishlist = true;
        this.deleteCart(course);
        if (course.wishlist) {
            this._wishListService.setWishList(course);
            this._messageService.add({
                severity: 'success',
                summary: 'Wishlist',
                detail: `${course.title} added to your wishlist`,
            });
        }
    }
}
