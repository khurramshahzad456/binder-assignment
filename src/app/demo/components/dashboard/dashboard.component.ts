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
    searchValue: string;
    sortAsc: boolean = false;
    sortOrder: number = 0;
    constructor(
        private _courseService: CoursesService,
        private _wishListService: WishlistService,
        private _messageService: MessageService
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
        course.wishlist = true;
        this._wishListService.setWishList(course);
        this._messageService.add({
            severity: 'success',
            summary: 'Wishlist',
            detail: `${course.title} added to your wishlist`,
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
