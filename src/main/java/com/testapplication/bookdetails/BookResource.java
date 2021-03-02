package com.testapplication.bookdetails;

import com.testapplication.bookdetails.model.Book;
import com.testapplication.bookdetails.service.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
public class BookResource {
    private final BookService bookService;

    public BookResource(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> books = bookService.findAllBooks();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping("/find/{ISBN}")
    public ResponseEntity<Book> getBookByISBN(@PathVariable("ISBN") Long ISBN) {
        Book book = bookService.findBookByISBN(ISBN);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Book>  addBook(@RequestBody Book book){
        Book newBook = bookService.addBook(book);
        return new ResponseEntity<>(newBook, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Book> updateBook(@RequestBody Book book){
        Book updateBook = bookService.updateBook(book);
        return new ResponseEntity<>(updateBook, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{ISBN}")
    public void deleteBook(@PathVariable("ISBN") Long ISBN){
        bookService.deleteBook(ISBN);
    }
}
