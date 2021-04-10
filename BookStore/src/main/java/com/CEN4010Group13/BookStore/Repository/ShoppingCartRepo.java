package com.CEN4010Group13.BookStore.Repository;

import com.CEN4010Group13.BookStore.Model.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingCartRepo extends JpaRepository<ShoppingCart, Integer> {
    void deleteShoppingCartById(Integer id);
}
