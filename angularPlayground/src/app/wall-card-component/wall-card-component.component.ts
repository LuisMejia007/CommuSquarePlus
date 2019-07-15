import { Component, OnInit } from '@angular/core';
import { Wall } from '../models/wall';
import { CommuSquareServiceService } from '../services/commu-square-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-wall-card-component',
  templateUrl: './wall-card-component.component.html',
  styleUrls: ['./wall-card-component.component.css']
})
export class WallCardComponentComponent implements OnInit {

  constructor(
    private service: CommuSquareServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  walls: Wall[] = [];
  ngOnInit() {
    this.getWalls();

  }


  getWalls() {
    this.service.getWalls()
    .subscribe(data => { this.walls = data; console.log(data); });
  }

  selectWall(wall: Wall) {
    // Using relative URL paths (relative meaning that we dont need to be completely explicit of the url path)
    // On the bottom right we use relativeTo to specify that we're still using this component's route path (/walls/)
    // On the bottom left we place the wall's id to specify which wall we want to go to .
    this.router.navigate([wall.wall_id], { relativeTo: this.activatedRoute});
  }


}
