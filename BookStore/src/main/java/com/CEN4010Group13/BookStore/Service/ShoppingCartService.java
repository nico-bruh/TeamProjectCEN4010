package com.CEN4010Group13.BookStore.Service;

import com.CEN4010Group13.BookStore.Model.ShoppingCart;
import com.CEN4010Group13.BookStore.Repository.ShoppingCartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoppingCartService {

    private final ShoppingCartRepo repo;

    @Autowired
    public ShoppingCartService(ShoppingCartRepo repo) {
        this.repo = repo;
    }

    public List<ShoppingCart> getCartItems() {
        return repo.findAll();
    }

    public ShoppingCart addToCart(ShoppingCart book) {
        return repo.save(book);
    }

    public ShoppingCart updateQuantity(ShoppingCart book) {
        return repo.save(book);
    }

    public ShoppingCart saveBookForLater(ShoppingCart book) {
        return repo.save(book);
    }

    public void deleteShoppingCart(Integer id) {
        repo.deleteShoppingCartById(id);
    }

}
