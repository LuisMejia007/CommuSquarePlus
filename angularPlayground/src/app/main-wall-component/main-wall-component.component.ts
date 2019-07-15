import { Component, OnInit } from '@angular/core';
import { CommuSquareServiceService } from '../services/commu-square-service.service';
import { Route, ActivatedRoute } from '@angular/router';
import { Wall } from '../models/wall';
import { Post } from '../models/post';

@Component({
  selector: 'app-main-wall-component',
  templateUrl: './main-wall-component.component.html',
  styleUrls: ['./main-wall-component.component.css']
})
export class MainWallComponentComponent implements OnInit {

  constructor(private service: CommuSquareServiceService, private activatedRoute: ActivatedRoute) { }

  wall: Wall;
  wallId: any;
  posts: Post[] = [];

  ngOnInit() {

   this.wallId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getWallById();
    this.getPostsFromWall(this.wallId);

    this.service.connect('guest', 'guest');

    this.service
    .getMessageSubject()
    .subscribe((message) => {
      if (message === 'Post added') {
        this.getPostsFromWall(this.wallId);
      } else {
        console.log('Message: ' + message);
      }
    });
  }

  getWallById() {
    this.service.getWallById(this.wallId)
    .subscribe( data => {
      this.wall = data;
      console.log(this.wall.wall_name);
    });
  }

  getPostsFromWall(id: number) {

    // Calling our service method 'getPostsByWallId' to make a GET request of all posts pertaining 
    // to this given wall's id.
    this.service
    .getPostsByWallId(id)
    .subscribe( data => {
      this.posts = data;
    });
  }

}
