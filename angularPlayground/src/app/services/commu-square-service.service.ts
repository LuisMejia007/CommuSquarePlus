import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Wall } from '../models/wall';
import { Post } from '../models/post';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import * as SockJs from 'sockjs-client';
import * as Stomp from '../../../node_modules/stompjs';
import { AnimationQueryMetadata } from '@angular/animations';

const httpOptions = {
  headers: new HttpHeaders({'string-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class CommuSquareServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000/api/commuSquare/';
  stompClient: any;
  messageSubject$ = new BehaviorSubject<string>('subject');


  /** User Services **/

  registerUser(user: User): Observable<User> {
    const url = this.baseUrl + 'register/';
    return this.http.post<User>(url, user, httpOptions);
  }

  getUsers(): Observable<User[]> {
    const url = this.baseUrl + 'register/';
    return this.http.get<User[]>(url, httpOptions);

  }


  /** Wall Services **/
  getWalls(): Observable<Wall[]> {
    const url = this.baseUrl + 'walls/';
    return this.http.get<Wall[]>(url, httpOptions);
  }

  getWallById(id: number): Observable<Wall> {
    const url = this.baseUrl + 'walls/' + id;
    console.log('Url we\'re making the req too:' + url);
    return this.http.get<Wall>(url, httpOptions);
  }


  /** Post Services **/

  addPost(post: Post): Observable<Post> {
    const url = this.baseUrl + 'addPost';
    console.log('Adding post with given url: ' + url);
    console.log('Post: ' + post.post_title + ' ' + post.post_content);
    return this.http.post<Post>(url, post, httpOptions);
  }

  getPostsByWallId(id: number): Observable<Post[]> {
    const url = this.baseUrl + 'posts/' + id;
    return this.http.get<Post[]>(url, httpOptions);
  }


    // Connecting to WebSocket found in Spring Boot MS. Also checkout polyfill.ts
    connect(user: string, password: string) {
      console.log('Inside Connect. Guest and Password: ' + user + ' ' + password);
      const socket = new SockJs('http://localhost:8080/commu-square-ws');
      this.stompClient = Stomp.over(socket);
      this.stompClient.connect(user, password, this.onConnected);
      console.log('Attempting to connect!');
    }

    onConnected = (frame: any) => {
      console.log('Frame: ' + frame);
      this.stompClient.subscribe('/commusquare-message-service/public', this.onMessageReceived);
    }

    onMessageReceived = (message: any) => {
        console.log('Message Received from MS: ' + message);

        try {

          this.messageSubject$.next(message.body);

        } catch (e) {

          console.log('Error: ' + e);

        }
    }

    getMessageSubject() {
      return this.messageSubject$.asObservable();
    }

}
