import { Component, OnInit } from '@angular/core';
import { Courses } from '../../model/course';
import { CoursesService } from '../../service/course.service';
import { WishlistService } from '../../service/wishlist/wishlist.service';
import { MessageService } from 'primeng/api';
import { CartService } from '../../service/cart/cart.service';
@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    courses!: Courses[];
    searchValue: string;
    sortAsc: boolean = false;
    sortOrder: number = 0;
    constructor(
        private _courseService: CoursesService,
        private _wishListService: WishlistService,
        private _messageService: MessageService,
        private _cartListService: CartService
    ) {}

    ngOnInit() {
        this._courseService.getProducts().then((data) => {
            this.courses = data.map((course) => ({
                ...course,
                afterDiscount:
                    course.actualPrice -
                    course.actualPrice * (course.discountPercentage / 100),
            }));
        });
    }

    addToWishList(course: Courses) {
        course.wishlist = !course.wishlist;
        if (course.wishlist) {
            this._wishListService.setWishList(course);
            this._messageService.add({
                severity: 'success',
                summary: 'Wishlist',
                detail: `${course.title} added to your wishlist`,
            });
        } else {
            this._wishListService.deleteWishList(course);
            this._messageService.add({
                severity: 'success',
                summary: 'Wishlist',
                detail: `${course.title} removed from your wishlist`,
            });
        }
    }

    addToCart(course: Courses) {
        if (course.cart) {
            this._messageService.add({
                severity: 'error',
                summary: 'Already in Cart',
                detail: `${course.title} already in your cart`,
            });
            return
        }
        course.cart = true;
        this._cartListService.setCartList(course);
        this._messageService.add({
            severity: 'success',
            summary: 'Cart',
            detail: `${course.title} added to your cart`,
        });
    }

    sortCourses() {
        this.sortAsc = !this.sortAsc;
        if (this.sortAsc) {
            this.sortOrder = -1;
        } else {
            this.sortOrder = 1;
        }
    }
}
