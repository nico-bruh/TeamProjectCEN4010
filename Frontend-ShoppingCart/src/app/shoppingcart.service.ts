import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from './shoppingcart';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getShoppingCartItems() : Observable<ShoppingCart[]> {
      return this.http.get<ShoppingCart[]>(`${this.apiServerUrl}/cart/all`);
  }

  public addShoppingCartItems(book : ShoppingCart) : Observable<ShoppingCart> {
    return this.http.post<ShoppingCart>(`${this.apiServerUrl}/cart/add`, book);
}

  public updateShoppingCartItems(book : ShoppingCart) : Observable<ShoppingCart> {
    return this.http.put<ShoppingCart>(`${this.apiServerUrl}/cart/update`, book);
}

  public deleteShoppingCartItems(bookID : number) : Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}/cart/delete/${bookID}`);
}

  public saveShoppingCartItems(book : ShoppingCart) : Observable<ShoppingCart> {
  return this.http.put<ShoppingCart>(`${this.apiServerUrl}/cart/save`, book);
}

}