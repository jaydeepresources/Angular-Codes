import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  category: string

  constructor(public actRoute: ActivatedRoute) {
    // ask angular to give the value of the param passed in the URL
    this.category = actRoute.snapshot.paramMap.get('category')
  }

  ngOnInit(): void {
  }

}