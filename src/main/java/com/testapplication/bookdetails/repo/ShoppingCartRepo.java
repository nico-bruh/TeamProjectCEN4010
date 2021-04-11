package com.testapplication.bookdetails.repo;

import com.testapplication.bookdetails.model.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingCartRepo extends JpaRepository<ShoppingCart, Integer> {
    void deleteShoppingCartById(Integer id);
}
