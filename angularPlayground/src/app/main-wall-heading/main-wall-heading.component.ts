import { Component, OnInit, Input } from '@angular/core';
import { Wall } from '../models/wall';

@Component({
  selector: 'app-main-wall-heading',
  templateUrl: './main-wall-heading.component.html',
  styleUrls: ['./main-wall-heading.component.css']
})
export class MainWallHeadingComponent implements OnInit {

  constructor() { }

  @Input() mainWall: Wall;

  ngOnInit() {
  }

}
