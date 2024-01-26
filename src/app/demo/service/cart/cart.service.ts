import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Courses } from '../../model/course';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    showCartModal$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private cartList$: BehaviorSubject<Courses[]> = new BehaviorSubject([]);

    constructor() {}

    setShowCartModal(value: boolean) {
        this.showCartModal$.next(value);
    }

    setCartList(course: Courses) {
        const newCartList = this.cartList$.value;
        newCartList.push(course);
        this.cartList$.next(newCartList);
    }

    deleteCart(course: Courses) {
        let newCartList = this.cartList$.value;
        const index = newCartList.findIndex((x) => x.id === course.id);
        newCartList.splice(index, 1);
        this.cartList$.next(newCartList);
    }

    getCartList(): Observable<Courses[]> {
        return this.cartList$;
    }

    emptyCart() {
        this.cartList$.next([]);
    }
}
