import { Component } from '@angular/core';
import { BookStore } from './boosktore';
import { bookService } from './bookstore.service'
import { OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  public books: BookStore[];

  constructor(private BookService: bookService){}

  ngOnInit()
  {
    this.getAllItems();
  }


  public getAllItems(): void
  {
    this.BookService.getAllItems().subscribe(
        (response: BookStore[]) => 
        {
          this.books = response;
        },
        (error: HttpErrorResponse) => 
        {
          alert(error.message);
        }
      );

    }
  }

