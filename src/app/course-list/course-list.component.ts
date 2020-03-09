import { Component, OnInit } from '@angular/core';
import { DataService} from '../data-service/data-service.component';
import { Post } from '../data-service/post';
import { HeaderNavComponent } from '../header-nav/header-nav.component';


@Component({
  selector: 'app-course-list',
  templateUrl: '../course-list/course-list.component.html',
  styleUrls: ['../course-list/course-list.component.css']
})

export class CourseListComponent implements OnInit {

  post: Post[]
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(posts => {
      this.post = posts
      this.dataService.postsData = posts
    });
  }
  
}