package com.testapplication.bookdetails.service;

import com.testapplication.bookdetails.exception.UserNotFoundException;
import com.testapplication.bookdetails.model.Book;
import com.testapplication.bookdetails.repo.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BookService
{
    private final BookRepo bookRepo;

    @Autowired
    public BookService(BookRepo bookRepo){
        this.bookRepo = bookRepo;
    }

    public Book addBook(Book book){
        book.setId(UUID.randomUUID().toString());
        return bookRepo.save(book);
    }
    public List<Book> findAllBooks() {
        return bookRepo.findAll();
    }

    public Book updateBook(Book book) {
        return bookRepo.save(book);
    }

    public Book findBookByISBN(Long ISBN){
        return bookRepo.findBookByISBN(ISBN)
                .orElseThrow(() -> new UserNotFoundException("User by ISBN " + ISBN + " was not found"));
    }
    public void deleteBook(Long ISBN){
        bookRepo.deleteBookByISBN(ISBN);
    }
}
