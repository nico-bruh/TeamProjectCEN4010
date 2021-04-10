package com.CEN4010Group13.BookStore.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.*;
import java.io.Serializable;

@Entity
public class topBookSort implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long topBookID;
    private String topbookName;
    private String topbookAuthor;
    private String topbookGenre;
    private String topbookCoverURL;
    private String topbookDescription;
    private Double topbookRating;
    private Double topbookPrice;
    private Integer topbookDate;

    public topBookSort(Long topbookID, String topbookName, String topbookAuthor, String topbookGenre, String topbookCoverURL, String topbookDescription, Double topbookRating, Double topbookPrice, Integer topbookDate) {
        topBookID = topbookID;
        this.topbookName = topbookName;
        this.topbookAuthor = topbookAuthor;
        this.topbookGenre = topbookGenre;
        this.topbookCoverURL = topbookCoverURL;
        this.topbookDescription = topbookDescription;
        this.topbookRating = topbookRating;
        this.topbookPrice = topbookPrice;
        this.topbookDate = topbookDate;
    }

    public topBookSort() {}

    public Long getTopBookID() {return topBookID;}
    public void setTopBookID(Long topBookID) {this.topBookID = topBookID; }

    public String getTopbookName() {return topbookName;}
    public void setTopbookName(String topbookName) {this.topbookName = topbookName; }

    public String getTopbookAuthor() {return topbookAuthor;}
    public void setTopbookAuthor(String topbookAuthor) {this.topbookAuthor = topbookAuthor;}

    public String getTopbookGenre() {return topbookGenre;}
    public void setTopbookGenre(String topbookGenre) {this.topbookGenre = topbookGenre;}

    public String getTopbookCoverURL() {return topbookCoverURL;}
    public void setTopbookCoverURL(String topbookCoverURL) {this.topbookCoverURL = topbookCoverURL;}

    public String getTopbookDescription() {return topbookDescription;}
    public void setTopbookDescription(String topbookDescription) {this.topbookDescription = topbookDescription;}

    public Double getTopbookRating() {return topbookRating;}
    public void setTopbookRating(Double topbookRating) {this.topbookRating = topbookRating;}

    public Double getTopbookPrice() {return topbookPrice;}
    public void setTopbookPrice(Double topbookPrice) {this.topbookPrice = topbookPrice;}

    public Integer getTopbookDate() {return topbookDate;}
    public void setTopbookDate(Integer topbookDate) {this.topbookDate = topbookDate;}

    @Override
    public String toString() {
        return "topBookSort{" +
                "topBookID=" + topBookID +
                ", topbookName='" + topbookName + '\'' +
                ", topbookAuthor='" + topbookAuthor + '\'' +
                ", topbookGenre='" + topbookGenre + '\'' +
                ", topbookCoverURL='" + topbookCoverURL + '\'' +
                ", topbookDescription='" + topbookDescription + '\'' +
                ", topbookRating=" + topbookRating +
                ", topbookPrice=" + topbookPrice +
                ", topbookDate=" + topbookDate +
                '}';
    }
}