import { Component, OnInit } from '@angular/core';
import { Courses } from '../../model/course';
import { CoursesService } from '../../service/course.service';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    courses!: Courses[];

    constructor(
        private productService: CoursesService,
    ) {}

    ngOnInit() {
        this.productService
            .getProducts()
            .then((data) => (this.courses = data));
    }
}
