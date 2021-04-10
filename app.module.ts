import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BookService } from './book.service';
import { AppRoutingModule } from './app-routing.module';
import { ReviewPageComponent } from './review-page/review-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailsComponent } from './book-details/book-details.component';
//import {NgxPaginationModule} from 'ngx-pagination';
//import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [ AppComponent, ReviewPageComponent, ReviewPageComponent, BookDetailsComponent ],
  
  imports:[
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //NgbModule,
    ReactiveFormsModule,
    FormsModule,
    //NgxPaginationModule,
    //OrderModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
