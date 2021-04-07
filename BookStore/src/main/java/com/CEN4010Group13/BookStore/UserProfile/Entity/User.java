package com.CEN4010Group13.BookStore.UserProfile.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

/**
 * This class defines the user table for the MySQL database.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class User implements Serializable {

    // The id is a unique generated integer.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private int id;
    private String name;
    @Column(nullable = false)
    private String userName;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String email;
    private String homeAddress;

    // Each user can have up to 4 shipping addresses.
    private String shippingAddress1;
    private String shippingAddress2;
    private String shippingAddress3;
    private String shippingAddress4;

    // Each user can have up to 4 credit cards.
    private long cardNumber1;
    private String expirationDate1;
    private int cvc1;
    private long cardNumber2;
    private String expirationDate2;
    private int cvc2;
    private long cardNumber3;
    private String expirationDate3;
    private int cvc3;
    private long cardNumber4;
    private String expirationDate4;
    private int cvc4;
}
