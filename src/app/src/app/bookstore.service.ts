import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { BookStore } from './boosktore';
import { topBookStore } from './boosktore';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})

export class bookService
{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}


    public getAllItems(): Observable<BookStore[]> 
    {
        return this.http.get<BookStore[]>(`${this.apiServerUrl}/books/items`);
    }

    public getAllTopItems(): Observable<topBookStore[]> 
    {
        return this.http.get<topBookStore[]>(`${this.apiServerUrl}/books/topSellers`);
    }
}
