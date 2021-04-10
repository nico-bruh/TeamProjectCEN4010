import { logging } from "selenium-webdriver";

export interface Book {
    
    title: String;
    author: String;
    imageURL: String;
    description: String;
    price: number;
    id: String;
    genre: String;
    release_date: String;
    publishingInfo: String;
    rating: number;
    review: String;

}