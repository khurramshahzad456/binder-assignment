import { Component, OnInit } from '@angular/core';
import { Courses } from '../../model/course';
import { CoursesService } from '../../service/course.service';
import { WishlistService } from '../../service/wishlist.service';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    courses!: Courses[];

    constructor(
        private _courseService: CoursesService,
        private _wishListService: WishlistService,
        private _messageService: MessageService,
    ) {}

    ngOnInit() {
        this._courseService.getProducts().then((data) => (this.courses = data));
    }

    addToWishList(course: Courses) {
        course.wishlist = true;
        this._wishListService.setWishList(course);
        this._messageService.add({ severity: 'success', summary: 'Wishlist', detail: `${course.title} added to your wishlist`})
    }
}
