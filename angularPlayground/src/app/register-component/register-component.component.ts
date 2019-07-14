import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import { CommuSquareServiceService } from '../services/commu-square-service.service';
@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  constructor(private service: CommuSquareServiceService) { }

  newUser: User;
  userName: string;
  userPassword: string;
  users: User[];

  ngOnInit() {

    // this.service.getUsers().subscribe( data => { this.users = data; });
  }

  registerUser() {
    this.newUser = new User(this.userName, this.userPassword);
    this.service.registerUser(this.newUser).subscribe();
  }

}
