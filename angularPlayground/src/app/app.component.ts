import { Component } from '@angular/core';
import { RouteAnimation } from './animations/routeAnimation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [RouteAnimation]
})
export class AppComponent {
  title = 'app';


  getComponent(outlet: RouterOutlet) {
    return outlet.activatedRouteData['component'];

  }
}
