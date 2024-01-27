import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: DashboardComponent },
            { path: 'course/:id', component: CourseDetailComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class DashboardsRoutingModule {}
