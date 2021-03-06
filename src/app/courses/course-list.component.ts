import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector:'app-course-list',
    templateUrl:'./course-List.component.html'
})

export class CourseListComponent implements OnInit{
    courses: Course[]=[];
    ngOnInit(): void{
        this.courses =[
            {
                id:1,
                name:'Angular: Forms',
                imageUrl:'/assets/images/forms.png',
                price:99.99,
                code:'XPS-8796',
                duration: 120,
                rating: 4.5,
                releaseDate:'December, 14, 2021'
            },
            {
                id:1,
                name:'Angular: HTTP',
                imageUrl:'assets/images/http.png',
                price: 45.99,
                code:'LKL-1094',
                duration: 120,
                rating: 2,
                releaseDate:'December, 14, 2021'
            },
            
        ]
    }
}
