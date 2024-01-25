import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Courses } from '../model/course';

@Injectable({
    providedIn: 'root',
})
export class WishlistService {
    showWishListModal$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private wishList$: BehaviorSubject<Courses[]> = new BehaviorSubject([]);

    constructor() {}

    setShowWishListModal(value: boolean) {
        this.showWishListModal$.next(value);
    }

    setWishList(course: Courses) {
        const newWishlist = this.wishList$.value;
        newWishlist.push(course);
        this.wishList$.next(newWishlist);
    }

    getWishList(): Observable<Courses[]> {
        return this.wishList$;
    }
}