package tech.getarrays.BookStore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.getarrays.BookStore.model.bookSort;
import tech.getarrays.BookStore.service.bookService;

import java.util.List;

@RestController
@RequestMapping("/books")
public class bookController
{
    private final bookService service;

    @Autowired
    public bookController(bookService service) {
        this.service = service;
    }

    @GetMapping("/items")
    public ResponseEntity<List<bookSort>> getAllItems() {
        List<bookSort> items = service.getAllBooks();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }
}
