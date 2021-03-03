package com.testapplication.bookdetails.service;

import com.testapplication.bookdetails.exception.UserNotFoundException;
import com.testapplication.bookdetails.model.Book;
import com.testapplication.bookdetails.repo.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class BookService
{
    private final BookRepo bookRepo;

    @Autowired
    public BookService(BookRepo bookRepo){
        this.bookRepo = bookRepo;
    }

    public List<Book> findAllBooks() {
        return bookRepo.findAll();
    }

    public Book findBookByIsbn(String isbn){
        return bookRepo.findBookByIsbn(isbn)
                .orElseThrow(() -> new UserNotFoundException("User by ISBN " + isbn + " was not found"));
    }
    /**
    public Book addBook(Book book) {
        return bookRepo.save(book);
    }

    public Book updateBook(Book book) {
        return bookRepo.save(book);
    }

    public void deleteBook(String isbn){
        bookRepo.deleteBookByIsbn(isbn);
    }
     **/
}
