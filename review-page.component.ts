import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { error } from 'selenium-webdriver';
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
  public reviewBook: Book;

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

  public onSubmit(book: NgForm): void{

    this.bookService.updateBook(book.value).subscribe(
      (response: Book)=>{
        alert("Review submitted!");
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      },
    )
  }


  // public onSubmit(values: any){

  //   let {title, rating, review} = values;
  //   alert(rating);
  //   alert(review);
  //   this.bookService.getABook(title).subscribe(

  //     (response: Book)=>{
  //       if(response != null)
  //         this.book = response;
  //     },// If there is an error, print the error message.
  //     (error: HttpErrorResponse) => {
  //       alert(error.message)
  //     }

  //   )
  //   this.book.rating = rating;
  //   this.book.review = review;
  //   this.bookService.updateBook(this.book).subscribe(

  //     (response: Book)=>{
  //       if(response == null)
  //         alert("Book does not exist.")
  //     },// If there is an error, print the error message.
  //     (error: HttpErrorResponse) => {
  //       alert(error.message)
  //     }

  //   )

  // }

}
