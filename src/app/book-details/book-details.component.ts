import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/book';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  
  public book: Book;

  constructor(private bookService: BookService) {}

  ngOnInit(){
    this.getBook("9780367024536");
  }
  
  public getBook(isbn:string): void {
    this.bookService.getBook(isbn).subscribe(
      (response: Book) => {this.book = response;}
      ,(error: HttpErrorResponse) => {alert(error.message);}
      );
    }}