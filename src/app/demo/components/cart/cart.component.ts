import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, map } from 'rxjs';
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
    totals: any;
    constructor(
        private _cartListService: CartService,
        private _messageService: MessageService,
        private _wishListService: WishlistService
    ) {
        this.showModal$ = this._cartListService.showCartModal$;
        this.cartList$ = this._cartListService.getCartList();
        this.calculateTotals();
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

    calculateTotals() {
        this.cartList$
            .pipe(
                // Use the map operator to transform the emitted array of cart items into total price and total discount
                map((cartItems: Courses[]) => {
                    // Assuming CartItem has 'price' and 'discountPercentage' properties
                    const actualPrice = cartItems
                        .reduce((total, item) => total + item.actualPrice, 0)
                        .toFixed(2);
                    const totalDiscount = cartItems
                        .reduce(
                            (total, item) =>
                                total +
                                (item.actualPrice * item.discountPercentage) /
                                    100,
                            0
                        )
                        .toFixed(2);
                    const totalPrice = cartItems
                        .reduce((total, item) => total + item.afterDiscount, 0)
                        .toFixed(2);
                    return { actualPrice, totalDiscount, totalPrice };
                })
            )
            .subscribe((totals) => {
                this.totals = totals;
            });
    }

    checkOut() {
        this._messageService.add({
            severity: 'success',
            summary: 'Checkout',
            detail: `Your Order has been place. Here is your OrderId 12345`,
        });
        this._cartListService.emptyCart();
        this.closeModal();
    }
}
