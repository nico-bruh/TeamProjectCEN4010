import { HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingCart } from './shoppingcart';
import { ShoppingcartService } from './shoppingcart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }
}
