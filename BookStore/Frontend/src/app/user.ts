export interface User {
  id: number;
  name: string;
  userName: string;
  password: string;
  email: string;
  homeAddress: string;

  shippingAddress1: string;
  shippingAddress2: string;
  shippingAddress3: string;
  shippingAddress4: string;

  cardNumber1: number;
  expirationDate1: string;
  cvc1: number;

  cardNumber2: number;
  expirationDate2: string;
  cvc2: number;

  cardNumber3: number;
  expirationDate3: string;
  cvc3: number;

  cardNumber4: number;
  expirationDate4: string;
  cvc4: number;
}
