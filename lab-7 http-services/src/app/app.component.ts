import { Component } from '@angular/core';
import { User } from './model/user';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public postsService: PostsService) {
    postsService.getPosts();
  }
}
