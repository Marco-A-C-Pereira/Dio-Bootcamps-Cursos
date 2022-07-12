import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../course";
import { CourseService } from "../course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course!:Course;
    // Ignorado por não saber o motivo do undefined

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

    ngOnInit(): void {
        let idAtual :number = + this.activatedRoute.snapshot.paramMap.get('id')!;
        // Ignorado, obj pode ser nulo

        this.courseService.retriveById(idAtual).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error', err)
        });
        
        // Isso pode ficar bem melhor como variavel ksksk
    }

    save():void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved with sucess', course),
            error: err => console.log('Error', err)        
        });
    }
}