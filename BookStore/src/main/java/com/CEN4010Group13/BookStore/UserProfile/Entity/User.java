package com.CEN4010Group13.BookStore.UserProfile.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class User {

    @Id
    private int id;
    private String name;
    private String userName;
    private String password;
    private String email;
    private String homeAddress;

    private String shippingAddress1;
    private String shippingAddress2;
    private String shippingAddress3;

    private long cardNumber1;
    private String expirationDate1;
    private int cvc1;
    private long cardNumber2;
    private String expirationDate2;
    private int cvc2;
    private long cardNumber3;
    private String expirationDate3;
    private int cvc3;
}
