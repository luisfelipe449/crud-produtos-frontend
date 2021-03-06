import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.scss'],
})
export class CreateCoursesComponent implements OnInit {
  courses: Course = {
    nome: '',
    estoque: 0,
    valor: 0,
  };

  constructor(private coursesService: CoursesService, private router: Router) {}

  ngOnInit(): void {}
  
  create(): void{
    this.coursesService.create(this.courses).subscribe(
      () => {
        this.router.navigate(['']);
      },
      () => { 
        console.log('Erro ao criar curso.');
      }
    );
  }

  cancel(): void{
    this.router.navigate(['']);
  }
}
