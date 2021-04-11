package com.testapplication.bookdetails.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * This class defines the user table for the MySQL database.
 */
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

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHomeAddress() {
        return homeAddress;
    }

    public void setHomeAddress(String homeAddress) {
        this.homeAddress = homeAddress;
    }

    public String getShippingAddress1() {
        return shippingAddress1;
    }

    public void setShippingAddress1(String shippingAddress1) {
        this.shippingAddress1 = shippingAddress1;
    }

    public String getShippingAddress2() {
        return shippingAddress2;
    }

    public void setShippingAddress2(String shippingAddress2) {
        this.shippingAddress2 = shippingAddress2;
    }

    public String getShippingAddress3() {
        return shippingAddress3;
    }

    public void setShippingAddress3(String shippingAddress3) {
        this.shippingAddress3 = shippingAddress3;
    }

    public String getShippingAddress4() {
        return shippingAddress4;
    }

    public void setShippingAddress4(String shippingAddress4) {
        this.shippingAddress4 = shippingAddress4;
    }

    public long getCardNumber1() {
        return cardNumber1;
    }

    public void setCardNumber1(long cardNumber1) {
        this.cardNumber1 = cardNumber1;
    }

    public String getExpirationDate1() {
        return expirationDate1;
    }

    public void setExpirationDate1(String expirationDate1) {
        this.expirationDate1 = expirationDate1;
    }

    public int getCvc1() {
        return cvc1;
    }

    public void setCvc1(int cvc1) {
        this.cvc1 = cvc1;
    }

    public long getCardNumber2() {
        return cardNumber2;
    }

    public void setCardNumber2(long cardNumber2) {
        this.cardNumber2 = cardNumber2;
    }

    public String getExpirationDate2() {
        return expirationDate2;
    }

    public void setExpirationDate2(String expirationDate2) {
        this.expirationDate2 = expirationDate2;
    }

    public int getCvc2() {
        return cvc2;
    }

    public void setCvc2(int cvc2) {
        this.cvc2 = cvc2;
    }

    public long getCardNumber3() {
        return cardNumber3;
    }

    public void setCardNumber3(long cardNumber3) {
        this.cardNumber3 = cardNumber3;
    }

    public String getExpirationDate3() {
        return expirationDate3;
    }

    public void setExpirationDate3(String expirationDate3) {
        this.expirationDate3 = expirationDate3;
    }

    public int getCvc3() {
        return cvc3;
    }

    public void setCvc3(int cvc3) {
        this.cvc3 = cvc3;
    }

    public long getCardNumber4() {
        return cardNumber4;
    }

    public void setCardNumber4(long cardNumber4) {
        this.cardNumber4 = cardNumber4;
    }

    public String getExpirationDate4() {
        return expirationDate4;
    }

    public void setExpirationDate4(String expirationDate4) {
        this.expirationDate4 = expirationDate4;
    }

    public int getCvc4() {
        return cvc4;
    }

    public void setCvc4(int cvc4) {
        this.cvc4 = cvc4;
    }

    public void setId(int id) {
        this.id = id;
    }

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
