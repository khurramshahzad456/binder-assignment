import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Courses } from 'src/app/demo/model/course';
import { CoursesService } from 'src/app/demo/service/course.service';

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrl: './course-detail.component.scss',
    standalone: false,
})
export class CourseDetailComponent {
    course: Courses;
    items: MenuItem[] | undefined;
    home: MenuItem | undefined;
    targetTime: Date = new Date(); // Set your target time here
    formattedTime: string = '00:00:00';
    ngOnInit() {}
    constructor(
        private _courseService: CoursesService,
        private route: ActivatedRoute
    ) {
        this.targetTime.setHours(this.targetTime.getHours() + 24);
        this.route.paramMap.subscribe((params) => {
            const courseID = params.get('id');
            this._courseService.getProducts().then((data) => {
                this.course = data.find((x) => x.id == courseID);
                this.items = [{ label: this.course.title }];
            });
        });

        this.home = { icon: 'pi pi-home', label: 'Courses', routerLink: '/' };

        setInterval(() => this.updateTimer(), 1000);

        // Initial call to display the time left
        this.updateTimer();
    }

   
  updateTimer() {
    // Get the current time
    const currentTime = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = this.targetTime.getTime() - currentTime.getTime();

    if (timeDifference > 0) {
      // Calculate hours, minutes, and seconds
      const hours = this.padZero(Math.floor(timeDifference / (1000 * 60 * 60)));
      const minutes = this.padZero(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = this.padZero(Math.floor((timeDifference % (1000 * 60)) / 1000));

      // Display the formatted time left
      this.formattedTime = `${hours}:${minutes}:${seconds}`;
    } else {
      // If the time has already elapsed, display a message or handle it as needed
      this.formattedTime = 'Offer Expired';
    }
  }

  padZero(value: number): string {
    return value < 10 ? '0' + value : '' + value;
  }
}
