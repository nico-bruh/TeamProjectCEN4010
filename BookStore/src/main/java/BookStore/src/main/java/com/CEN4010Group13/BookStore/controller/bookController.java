package com.CEN4010Group13.BookStore.controller;

import com.CEN4010Group13.BookStore.model.bookSort;
import com.CEN4010Group13.BookStore.model.topBookSort;
import com.CEN4010Group13.BookStore.service.bookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/books")
public class bookController
{
    private final bookService service;


    public bookController(bookService service) {
        this.service = service;
    }

    @GetMapping("/items")
    public ResponseEntity<List<bookSort>> getAllItems() {
        List<bookSort> items = service.getAllBooks();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/topSellers")
    public ResponseEntity<List<topBookSort>> getAllTopItems() {
        List<topBookSort> items = service.getAllTopBooks();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }


}
