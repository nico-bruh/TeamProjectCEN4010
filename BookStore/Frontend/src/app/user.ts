export class User {
  // All are optional except the username, email, and password.
  // The ID is auto generated in the backend.
  name?: string;
  userName!: string;
  // The password is stored in plain text in the frontend and is encrypted in the backend.
  password!: string;
  email!: string;
  homeAddress?: string;

  shippingAddress1?: string;
  shippingAddress2?: string;
  shippingAddress3?: string;
  shippingAddress4?: string;

  cardNumber1?: number;
  expirationDate1?: string;
  cvc1?: number;

  cardNumber2?: number;
  expirationDate2?: string;
  cvc2?: number;

  cardNumber3?: number;
  expirationDate3?: string;
  cvc3?: number;

  cardNumber4?: number;
  expirationDate4?: string;
  cvc4?: number;

  /**
   * Create a new User.
   * 
   * @param username is the username.
   * @param email is the email address linked to the account.
   * @param password is the password for logging in.
   */
  constructor(username: string, email: string, password: string) {
    this.userName = username;
    this.email = email;
    this.password = password;
  }
}
