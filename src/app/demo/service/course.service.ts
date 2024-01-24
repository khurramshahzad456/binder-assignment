import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Courses } from '../model/course';

@Injectable()
export class CoursesService {
    constructor(private http: HttpClient) {}

    getProducts() {
        return this.http
            .get<any>('assets/demo/data/courses.json')
            .toPromise()
            .then((res) => res.data as Courses[])
            .then((data) => data);
    }
}
