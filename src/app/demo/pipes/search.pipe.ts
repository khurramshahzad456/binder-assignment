import { Pipe, PipeTransform } from '@angular/core';
import { Courses } from '../model/course';

@Pipe({
    name: 'courseFilter',
    standalone: false,
})
export class CourseFilterPipe implements PipeTransform {
    transform(courses: Courses[], searchText: string): Courses[] {
        if (!courses || !searchText) {
            return courses;
        }

        searchText = searchText.toLowerCase();

        return courses.filter((course) => {
            const titleMatch = course.title?.toLowerCase().includes(searchText);
            const authorMatch = course.authorName
                ?.toLowerCase()
                .includes(searchText);
            const tagsMatch = course.category?.includes(searchText);

            return titleMatch || authorMatch || tagsMatch;
        });
    }
}
