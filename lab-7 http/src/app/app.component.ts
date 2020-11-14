import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  posts: any[]

  constructor(public http: HttpClient) {
    // make a call to --> https://jsonplaceholder.typicode.com/posts
    // get the response in json
    // store it in posts[]
    // map in into cards
    // by default, promises are supported via observables and subscriptions

    http.get("https://jsonplaceholder.typicode.com/posts").subscribe((data: any[]) => this.posts = data)

  }

}
