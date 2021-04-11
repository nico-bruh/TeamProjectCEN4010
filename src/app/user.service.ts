import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * This interacts with the Rest API in the backend.
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  /**
   * This gets all users in the database.
   *
   * @returns a list of users.
   */
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/users`);
  }

  /**
   * This gets a user by ID.
   * 
   * @param id is the user's ID.
   * @returns the user.
   */
  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/userByID/${id}`);
  }

  /**
   * This gets a user by name.
   * 
   * @param name is the user's name.
   * @returns the user.
   */
  public getUserByName(name: string): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/userByName/${name}`);
  }

  /**
   * This gets a user by username.
   * 
   * @param userName is the user's username.
   * @returns the user.
   */
  public getUserByUserName(userName: string): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/user/${userName}`);
  }

  /**
   * This adds a user.
   * 
   * @param user contains the user's information to be added to the database.
   * @returns the user.
   */
  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/addUser`, user);
  }

  /**
   * This adds a list of users to the database.
   *
   * @param users is the list of users.
   * @returns the list of users.
   */
  public addUsers(users: User[]): Observable<User[]> {
    return this.http.post<User[]>(`${this.apiServerUrl}/addUsers`, users);
  }

  /**
   * This updates an already existing user.
   * 
   * @param user has the updated information.
   * @returns the updated user.
   */
  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/update`, user);
  }

  /**
   * This gets a user's password.
   * 
   * @param user is the user.
   * @returns the password.
   */
  public getPassword(user: User): Observable<String> {
    return this.http.get<String>(`${this.apiServerUrl}/getPassword/${user.userName}`);
  }

  /**
   * This sets the user's password.
   *
   * @param user is the user.
   * @param password is the new password.
   * @returns the user.
   */
  public setPassword(user: User, password: string): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/setPassword/${password}`, user);
  }

  /**
   * This deletes a user.
   * 
   * @param id is the ID of the user to be deleted.
   * @returns the user deleted.
   */
  public deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.apiServerUrl}/delete/${id}`);
  }
}
