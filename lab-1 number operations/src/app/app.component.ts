import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  no: number
  color: string

  constructor() {
    this.no = 0
    this.color = 'text-primary'
  }

  increase() {
    this.no++
    this.setColor()
  }

  decrease() {
    this.no--
    this.setColor()
  }

  setColor() {
    this.color = (this.no > 0) ? 'text-success' : (this.no < 0) ? 'text-danger' : 'text-primary'
  }

}
