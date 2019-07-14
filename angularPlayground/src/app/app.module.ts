import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainSlideshowComponent } from './main-slideshow/main-slideshow.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { StickNavDirective } from './directives/stick-nav.directive';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ExampleThreeComponent } from './example-three/example-three.component';
import { AddItemComponent } from './add-item/add-item.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { AddInventoryItemComponentComponent } from './add-inventory-item-component/add-inventory-item-component.component';
import { CommuSquareServiceService } from './services/commu-square-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CreatePostComponentComponent } from './create-post-component/create-post-component.component';
import { WallCardComponentComponent } from './wall-card-component/wall-card-component.component';
import { MainWallComponentComponent } from './main-wall-component/main-wall-component.component';
import { PostCardComponentComponent } from './post-card-component/post-card-component.component';
import { MainWallHeadingComponent } from './main-wall-heading/main-wall-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MainSlideshowComponent,
    CardComponentComponent,
    StickNavDirective,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent,
    AddItemComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    AddInventoryItemComponentComponent,
    CreatePostComponentComponent,
    WallCardComponentComponent,
    MainWallComponentComponent,
    PostCardComponentComponent,
    MainWallHeadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [CommuSquareServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
