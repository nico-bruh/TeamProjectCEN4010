package com.testapplication.bookdetails.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Book implements Serializable {
    @Id
    private String isbn;
    private String title;
    private String author;
    private double price;
    private String genre;
    private String releaseDate;
    private String publishingInfo;
    private String description;
    private String imageUrl;

    public Book() {

    }

    public Book(String isbn, String title, String author, double price, String genre, String releaseDate, String publishingInfo, String description, String imageUrl){
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.price = price;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.publishingInfo = publishingInfo;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    public String getIsbn() {
        return isbn;
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

    public String getGenre() {
        return genre;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public String getPublishingInfo() {
        return publishingInfo;
    }

    public String getDescription() {
        return description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public void setPublishingInfo(String publishingInfo) {
        this.publishingInfo = publishingInfo;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "book{\n" +
                "ISBN=" + isbn + "\n" +
                "title=" + title + '\n' +
                "author=" + author + '\n' +
                "price=" + price + '\n' +
                "genre=" + genre + '\n' +
                "releaseDate=" + releaseDate + '\n' +
                "publishingInfo=" + publishingInfo + '\n' +
                "description=" + description + '\n' +
                "imageUrl=" + imageUrl + '\n' +
                "}\n";
    }
}
