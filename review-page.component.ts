import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {

  private routeSub: Subscription;
  public book: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getBook(id);
  }

public getBook(id:string): void {
  this.bookService.getBook(id).subscribe(
    (response: Book) => {this.book = response;}
    ,(error: HttpErrorResponse) => {alert(error.message);}
    );
  }

}
