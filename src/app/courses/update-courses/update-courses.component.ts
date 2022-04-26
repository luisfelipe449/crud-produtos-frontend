import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-update-courses',
  templateUrl: './update-courses.component.html',
  styleUrls: ['./update-courses.component.scss']
})
export class UpdateCoursesComponent implements OnInit {

  courses: Course = {
    name: '',
    stock: 0,
    unitaryValue: 0,
    totalAmount: 0,
  };

  constructor(private router: Router, private service: CoursesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courses._id = this.route.snapshot.paramMap.get("id")!;
  }

  update(): void{
    this.service.update(this.courses).subscribe();
    this.router.navigate(['']);
  }

  cancel(): void{
    this.router.navigate(['']);
  }

}
