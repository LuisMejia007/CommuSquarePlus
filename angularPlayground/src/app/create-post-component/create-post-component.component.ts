import { Component, OnInit } from '@angular/core';
import { CommuSquareServiceService } from '../services/commu-square-service.service';
import { Post } from '../models/post';
import { CreateNewPostAnimation } from '../animations/createPostAnimation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-post-component',
  templateUrl: './create-post-component.component.html',
  styleUrls: ['./create-post-component.component.css'],
  animations: [CreateNewPostAnimation]
})
export class CreatePostComponentComponent implements OnInit {

  constructor(private service: CommuSquareServiceService,  private activatedRoute: ActivatedRoute) { }

  newPost: Post;
  postTitle = '';
  postContent = '';
  postDate: any;
  postWallId: number;
  createPostAnimationState = 'cancel';

  ngOnInit() {
    this.createPostAnimationState = 'cancel';

    const num = this.activatedRoute.snapshot.paramMap.get('id');
    this.postWallId = parseInt(num, 10);
    console.log('Wall Id: ' + this.postWallId);
  }

  makePost() {
    console.log(this.postTitle + ' ' + this.postContent);

    const dateFormat = require('dateformat');
    const now = new Date();
    this.postDate = dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');

    // Creating a new post with user inputs and present date/time
    this.newPost = new Post(this.postTitle, this.postContent, this.postDate, this.postWallId);

    // Calling our service method 'addPost' to make a POST request to our backend code.
    this.service.addPost(this.newPost).subscribe();
  }


  // EnterPostTitle and EnterPostContent will continuously get updated values of respective inputs from form.
  // Since we're replacing the event-emitter with our own (the two below).
  enterPostTitle(postTitle: any) {
    this.postTitle = postTitle;
    console.log(this.postTitle);
  }

  enterPostContent(postContent: any) {
    this.postContent = postContent;
    console.log(this.postContent);
  }

  createPostState() {
    this.createPostAnimationState = 'create';
    console.log(this.createPostAnimationState);
  }
  cancelPostState() {
    this.createPostAnimationState = 'cancel';
    console.log(this.createPostAnimationState);
  }

}
