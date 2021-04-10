import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/book';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  
  private routeSub: Subscription;
  public book: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit() {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    this.getBook(isbn);
    }
  

    ngOnDestroy(){
      this.routeSub.unsubscribe();
    }
  
  
  public getBook(isbn:string): void {
    this.bookService.getBook(isbn).subscribe(
      (response: Book) => {this.book = response;}
      ,(error: HttpErrorResponse) => {alert(error.message);}
      );
    }

    showModal: boolean;
    show()
    {
      this.showModal = true; // Show-Hide Modal Check  
    }

    //Bootstrap Modal Close event
    hide()
    {
      this.showModal = false;
    }

  }