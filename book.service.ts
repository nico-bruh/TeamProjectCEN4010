
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // public getBook(id:string): Observable<Book>{
  //   return this.http.get<Book>(`${this.apiServerUrl}/${id}`);
  // }

  public getBook(id: String): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/book/all`);
  }
  public getABook(title: String): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/book/getByTitle`);
  }

  public addBook(book: Book): Observable<Book>{
    return this.http.post<Book>(`${this.apiServerUrl}/book/add`, book);
  }

  public updateBook(book: Book): Observable<Book>{
    return this.http.put<Book>(`${this.apiServerUrl}/book/update`, book);
  }

  public deleteBook(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/book/delete/${id}`);
  }


}
