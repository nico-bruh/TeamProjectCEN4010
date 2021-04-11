import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { User } from '../../user';
import { UserService } from '../../user.service';

/**
 * This logs a user into their account.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * User service and router allow for access to the backend and routing.
   */
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * This authenticates user information when logging in.
   * 
   * @param values will hold the username and password if they were entered.
   */
  onSubmit(values: any) {
    let { username, password } = values;

    // Handle empty fields.
    if (username == "")
      alert("Please enter a username.")
    else if (password == "")
      alert("Please enter a password.")
    else {
      // If both fields are filled out, get the user with the username.
      this.userService.getUserByUserName(username).subscribe(
        // If a null user is returned, there isn't an account for that username.
        (response: User) => {
          if (response == null)
            alert("There is no account for that username.")

          // Otherwise, compare the passwords.
          if (response.password != password)
            alert("Invalid password.")
          // If the passwords match, go to the profile page.
          else {
            this.authService.login(response)
            this.router.navigate(['/profile'])
          }
        },// If there is an error, print the error message.
        (error: HttpErrorResponse) => {
          alert(error.message)
        }
      );
    }

  }

}
