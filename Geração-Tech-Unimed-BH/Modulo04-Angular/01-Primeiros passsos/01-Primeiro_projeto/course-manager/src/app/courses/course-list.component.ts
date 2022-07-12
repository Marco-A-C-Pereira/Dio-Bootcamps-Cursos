import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html' 
})
export class CourseListComponent implements OnInit{

    filteredCourses: Course[] = [];

    _courses: Course[] = [];
    _filterBy:string = '';

    constructor(private courseService: CourseService){ }

    ngOnInit():void{
        this.retriveAll();
    }

    retriveAll():void{
        this.courseService.retriveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        });
    }

    deleteByID(courseid :number): void{ 
        this.courseService.deleteById(courseid).subscribe({
            next: () => {
                console.log('Sucessful deletion');
                this.retriveAll();
            },
            error: err => console.log('Error', err)
        })
    }

    //evento de input
    set filter(value:string) {
        this._filterBy = value;

        //Não é melhor fazer uma var aux para ficar melhor de ler ? 
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1 )
    }

    //evento de output
    get filter(){
        return this._filterBy;
    }
}