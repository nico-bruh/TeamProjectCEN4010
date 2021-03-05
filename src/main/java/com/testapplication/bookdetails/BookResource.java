package com.testapplication.bookdetails;

import com.testapplication.bookdetails.model.Book;
import com.testapplication.bookdetails.service.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/home")
public class BookResource {
    private final BookService bookService;

    public BookResource(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/browse")
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> books = bookService.findAllBooks();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping("/browse/{isbn}")
    public ResponseEntity<Book> getBookByISBN(@PathVariable("isbn") String isbn) {
        Book book = bookService.findBookByIsbn(isbn);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    /**
    @PostMapping("/add")
    public ResponseEntity<Book>  addBook(@RequestBody Book book){
        Book newBook = bookService.updateBook(book);
        return new ResponseEntity<>(newBook, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Book> updateBook(@RequestBody Book book){
        Book updateBook = bookService.updateBook(book);
        return new ResponseEntity<>(updateBook, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{isbn}")
    public void deleteBook(@PathVariable("isbn") String isbn){
        bookService.deleteBook(isbn);
    }
    **/
}
