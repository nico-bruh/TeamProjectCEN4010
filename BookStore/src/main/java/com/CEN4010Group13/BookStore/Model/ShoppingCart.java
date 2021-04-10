package com.CEN4010Group13.BookStore.Model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class ShoppingCart implements Serializable {

    @Id
    private Integer id;
    private Integer userId;
    private String bookName;
    private Integer quantityInCart;
    private boolean saveForLater;
    private Integer bookPrice;

    public ShoppingCart(Integer isbn, int id, String bookName, Integer quantityInCart, boolean saveForLater, Integer bookPrice) {
        this.id = isbn;
        this.userId = id;
        this.bookName = bookName;
        this.quantityInCart = quantityInCart;
        this.bookPrice = bookPrice;
        this.saveForLater = saveForLater;
    }

    public ShoppingCart() {
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public Integer getQuantityInCart() {
        return quantityInCart;
    }

    public int getId() {
        return id;
    }

    public boolean isSaveForLater() {
        return saveForLater;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setSaveForLater(boolean saveForLater) {
        this.saveForLater = saveForLater;
    }

    public void setQuantityInCart(Integer quantityInCart) {
        this.quantityInCart = quantityInCart;
    }

    public Integer getBookPrice() {
        return bookPrice;
    }

    public void setBookPrice(Integer bookPrice) {
        this.bookPrice = bookPrice;
    }

    @Override
    public String toString() {
        return "ShoppingCart{" +
                "id=" + id +
                ", userId=" + userId +
                ", bookName='" + bookName + '\'' +
                ", quantityInCart=" + quantityInCart +
                ", saveForLater=" + saveForLater +
                ", bookPrice=" + bookPrice +
                '}';
    }
}
