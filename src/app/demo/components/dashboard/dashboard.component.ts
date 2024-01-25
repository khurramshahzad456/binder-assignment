import { Component, OnInit } from '@angular/core';
import { Courses } from '../../model/course';
import { CoursesService } from '../../service/course.service';
import { WishlistService } from '../../service/wishlist.service';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    courses!: Courses[];

    constructor(
        private _courseService: CoursesService,
        private _wishListService: WishlistService
    ) {}

    ngOnInit() {
        this._courseService.getProducts().then((data) => (this.courses = data));
    }
}
