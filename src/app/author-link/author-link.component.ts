import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/book';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-author-link',
  templateUrl: './author-link.component.html',
  styleUrls: ['./author-link.component.css']
})
export class AuthorLinkComponent implements OnInit {
  public author;
  private routeSub: Subscription;
  public books: Book[];

  constructor(private bookService: BookService, private route: ActivatedRoute) {}
     ngOnInit() {
      this.getBooks();
      this.author = this.route.snapshot.paramMap.get('author');
    }
  
    ngOnDestroy(){
      this.routeSub.unsubscribe();
    }
    
    public getBooks(): void
    {
      this.bookService.getBooks().subscribe(
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

}
