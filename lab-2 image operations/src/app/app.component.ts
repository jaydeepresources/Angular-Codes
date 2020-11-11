import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  width: number
  height: number

  constructor() {
    this.width = 200
    this.height = 200
  }

  zoomIn() {
    this.width += 10
    this.height += 10
  }

  zoomOut() {
    this.width -= 10
    this.height -= 10
  }

}