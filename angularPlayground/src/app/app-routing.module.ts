import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ExampleThreeComponent } from './example-three/example-three.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { WallCardComponentComponent } from './wall-card-component/wall-card-component.component';
import { MainWallComponentComponent } from './main-wall-component/main-wall-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: { component: 'Home' } },
  { path: 'comp1', component: ExampleOneComponent, data: { component: 'Comp1' }},
  { path: 'walls', component: WallCardComponentComponent, data: { component: 'Comp2' }},
  { path: 'walls/:id', component: MainWallComponentComponent },
  { path: 'comp3', component: ExampleThreeComponent, data: { component: 'Comp3' }},
  { path: 'login', component: LoginComponentComponent, data: { component: 'Login'}},
  { path: 'register', component: RegisterComponentComponent, data: { component: 'Register'}},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
