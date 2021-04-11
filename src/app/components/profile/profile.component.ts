import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth.service';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: any;
  private userSub: Subscription;

  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {
    this.user = null;
    this.userSub = this.authService.currentUser.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void { }


  onSubmit() {

    let month = new Date().getMonth
    // Ok is set to false if any issues are found in the numbers or expiration dates
    let ok = true

    // Check that all four credit cards have valid expiration dates.
    if (this.user.expirationDate1 != "") {
      let expiryDate1 = this.user.expirationDate1.split("/")

      if (expiryDate1.length == 1 || (expiryDate1[1] < 21 || (expiryDate1[1] == 21 && expiryDate1[0] < month))) {
        alert("Card 1 has an invalid expiration date.")
        ok = false
      }
    }
    if (this.user.expirationDate2 != "") {
      let expiryDate2 = this.user.expirationDate2.split("/")

      if (expiryDate2.length == 1 || (expiryDate2[1] < 21 || (expiryDate2[1] == 21 && expiryDate2[0] < month))) {
        alert("Card 2 has an invalid expiration date.")
        ok = false
      }
    }
    if (this.user.expirationDate3 != "") {
      let expiryDate3 = this.user.expirationDate3.split("/")

      if (expiryDate3.length == 1 || (expiryDate3[1] < 21 || (expiryDate3[1] == 21 && expiryDate3[0] < month))) {
        alert("Card 3 has an invalid expiration date.")
        ok = false
      }
    }
    if (this.user.expirationDate4 != "") {
      let expiryDate4 = this.user.expirationDate4.split("/")

      if (expiryDate4.length == 1 || (expiryDate4[1] < 21 || (expiryDate4[1] == 21 && expiryDate4[0] < month))) {
        alert("Card 4 has an invalid expiration date.")
        ok = false
      }
    }

    // Check that all card numbers contain only numbers.
    if (this.user.cardNumber1 != 0 && isNaN(this.user.cardNumber1)) {
      alert("Card number 1 must only contain digits 0-9.")
      ok = false
    }
    if (this.user.cardNumber2 != 0 && isNaN(this.user.cardNumber2)) {
      alert("Card number 1 must only contain digits 0-9.")
      ok = false
    }
    if (this.user.cardNumber3 != 0 && isNaN(this.user.cardNumber3)) {
      alert("Card number 1 must only contain digits 0-9.")
      ok = false
    }
    if (this.user.cardNumber4 != 0 && isNaN(this.user.cardNumber4)) {
      alert("Card number 1 must only contain digits 0-9.")
      ok = false
    }

    // Save if the credit card numbers and expiration dates are valid.
    if (ok) {
      this.userService.updateUser(this.user).subscribe(
        (response: User) => {
          alert("Changes saved.")
        },
        (error: HttpErrorResponse) => {
          alert(error.message)
        }
      )
    }
  }
}
