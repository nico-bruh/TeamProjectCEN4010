import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public books: Book[];
  title: any;
  constructor(private bookService: BookService) { }

  ngOnInit(){
    //this.getBooks();
  }

// public getBooks(): void{
//   this.bookService.getBook().subscribe(
//     (response: Book[]) => {
//       this.books = response;
//     },
//     (error: HttpErrorResponse) => {
//       alert(error.message);
//     }
//   );
// }

// public onOpenModal(book: Book, mode: string): void{

//   const container = document.getElementById('main-container');
//   const button = document.createElement('button');
//   button.type = 'button';
//   button.style.display = 'none';
//   button.setAttribute('data-toggle', 'modal');
//   if (mode === 'add'){

//     button.setAttribute('data-target', 'addRatingModal');

//   }

//   container.appendChild(button);
//   button.click();

// }

}
