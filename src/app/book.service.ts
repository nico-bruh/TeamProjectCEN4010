import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root'})

export class BookService {
  private apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  // Decides what book to retrieve from the back-end.
  public getBook(isbn:string): Observable<Book>{
    return this.http.get<Book>(`${this.apiServerUrl}/${isbn}`);
  }

  //Ignore this function for now
  public getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.apiServerUrl}/browse`);
  }

}
