package com.CEN4010Group13.BookStore.Controller;

import com.CEN4010Group13.BookStore.Model.ShoppingCart;
import com.CEN4010Group13.BookStore.Service.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class ShoppingCartResource {

    private final ShoppingCartService service;

    @Autowired
    public ShoppingCartResource(ShoppingCartService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ShoppingCart>> getShoppingCartItems() {
        List<ShoppingCart> list = service.getCartItems();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<ShoppingCart> addToCart(@RequestBody ShoppingCart book) {
        ShoppingCart newBook = service.addToCart(book);
        return new ResponseEntity<>(newBook, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<ShoppingCart> updateQuantity(@RequestBody ShoppingCart book) {
        ShoppingCart updateBookQuantity = service.updateQuantity(book);
        return new ResponseEntity<>(updateBookQuantity, HttpStatus.OK);
    }

    @PutMapping("/save")
    public ResponseEntity<ShoppingCart> updateSaveForLater(@RequestBody ShoppingCart book) {
        ShoppingCart updateBookQuantity = service.saveBookForLater(book);
        return new ResponseEntity<>(updateBookQuantity, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> removeFromCart(@PathVariable("id") Integer id) {
        service.deleteShoppingCart(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
