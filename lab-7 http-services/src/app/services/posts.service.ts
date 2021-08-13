import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[];
  constructor(public http: HttpClient) {
    this.posts = [];
  }

  getPosts() {
    this.http
      .get<Post[]>('http://localhost:8080/posts/all')
      .subscribe((res) => {
        this.posts = res;
      });
  }
}
