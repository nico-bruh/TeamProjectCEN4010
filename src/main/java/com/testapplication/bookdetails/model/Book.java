package com.testapplication.bookdetails.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Book implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long ISBN;
    private String title;
    private String author;
    private double price;
    private String releaseDate;
    private String publishingInfo;
    @Column(nullable = false, updatable = false)
    private String id;
    private String description;

    public Book() {

    }

    public Book(String id, String title, String author, double price, String releaseDate, String publishingInfo, String description){
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.releaseDate = releaseDate;
        this.publishingInfo = publishingInfo;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public double getPrice() {
        return price;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getISBN() {
        return ISBN;
    }

    public void setISBN(Long ISBN) {
        this.ISBN = ISBN;
    }

    public String getPublishingInfo() {
        return publishingInfo;
    }

    public void setPublishingInfo(String publishingInfo) {
        this.publishingInfo = publishingInfo;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "book{" +
                "ISBN=" + ISBN +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", price='" + price + '\'' +
                ", releaseDate='" + releaseDate + '\'' +
                ", publishingInfo='" + publishingInfo + '\'' +
                ", id='" + id + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
