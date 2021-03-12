import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = '';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/users`);
  }

  public getUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/user/addUser`, user);
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/user/user/${id}`);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/user/update`, user);
  }

  public deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.apiServerUrl}/user/delete/${id}`);
  }
}
