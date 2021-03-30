import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { BookService } from './book.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookBrowsingComponent } from './book-browsing/book-browsing.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [ AppComponent, BookDetailsComponent, BookBrowsingComponent ],
  
  imports:[
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    OrderModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
