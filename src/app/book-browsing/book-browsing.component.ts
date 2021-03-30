import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';
import { HttpErrorResponse } from '@angular/common/http';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-book-browsing',
  templateUrl: './book-browsing.component.html',
  styleUrls: ['./book-browsing.component.css']
})

export class BookBrowsingComponent implements OnInit
{
  p:number = 1;
  public books: Book[];
  
  sortedCollection: any[];
  constructor(private BookService: BookService, private orderPipe: OrderPipe)
  { this.sortedCollection = orderPipe.transform(this.books, 'book.title');
  console.log(this.sortedCollection);
  }

  
  ngOnInit() 
  {
    this.getBooks();
  }


  public getBooks(): void
  {
    this.BookService.getBooks().subscribe(
        (response: Book[]) => 
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
  const results: Book[] = [];
  for (const book of this.books) 
  {
    if (book.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || book.author.toLowerCase().indexOf(key.toLowerCase()) !== -1)
    {
      results.push(book);
    }
  }
  this.books = results;
  if (results.length === 0 || !key)
  {
    this.getBooks();
  }
}

order: string = 'info.name';
  reverse: boolean = false;
  
setOrder(value: string) {
  if (this.order === value) {
    this.reverse = !this.reverse;
  }

  this.order = value;
}



  
  }