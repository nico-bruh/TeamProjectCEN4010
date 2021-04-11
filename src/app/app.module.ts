import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { BookService } from './book.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookBrowsingComponent } from './book-browsing/book-browsing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthorLinkComponent } from './author-link/author-link.component';
@NgModule({
  declarations: [ AppComponent, BookDetailsComponent, BookBrowsingComponent, LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AuthorLinkComponent ],
  
  imports:[
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    OrderModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
