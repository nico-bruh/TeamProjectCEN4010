import { Component } from '@angular/core';
import { BookStore } from './boosktore';
import { bookService } from './bookstore.service'
import { OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  
p:number = 1;
  public books: BookStore[];
  
  sortedCollection: any[];
  constructor(private BookService: bookService, private orderPipe: OrderPipe){ this.sortedCollection = orderPipe.transform(this.books, 'book.Bookname');
  console.log(this.sortedCollection);}

  
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


public searchBooks(key: string): void
{
  const results: BookStore[] = [];
  for (const book of this.books) 
  {
    if (book.bookName.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || book.bookAuthor.toLowerCase().indexOf(key.toLowerCase()) !== -1)
    {
      results.push(book);
    }
  }
  this.books = results;
  if (results.length === 0 || !key)
  {
    this.getAllItems();
  }
}

  order: string = 'book.Bookname';
  reverse: boolean = false;

setOrder(value: string) {
  if (this.order === value) {
    this.reverse = !this.reverse;
  }

  this.order = value;
}



  
  }
  

  

  



