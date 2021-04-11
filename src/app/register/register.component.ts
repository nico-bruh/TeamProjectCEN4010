import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

/**
 * This component allows a user to register for an account.
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // The user service allows for interaction with the backend.
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  /**
   * This creates an account.
   * 
   * @param values is three strings, unless one of the fields wasn't filled out.
   */
  createAccount(values: any) {
    
    let { username, email, password } = values;

    // Check that all fields are filled out.
    if (username == "" || email == "" || password == "")
      return alert("Please fill out all text fields.");

    // Create a new user with the values and save the user to the database.
    var user = new User(username, email, password)
      
    this.userService.addUser(user).subscribe(
      (response: User) => {
        alert("Registration successful. You may now login.");
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

}
