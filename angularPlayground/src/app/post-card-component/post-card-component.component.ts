import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-card-component',
  templateUrl: './post-card-component.component.html',
  styleUrls: ['./post-card-component.component.css']
})
export class PostCardComponentComponent implements OnInit {

  constructor() { }

  @Input() postCard: Post;
  ngOnInit() {
  }

}
