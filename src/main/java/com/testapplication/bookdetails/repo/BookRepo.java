package com.testapplication.bookdetails.repo;

import com.testapplication.bookdetails.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookRepo extends JpaRepository<Book, String> {

    void deleteBookByISBN(Long ISBN);

    Optional<Book> findBookByISBN(Long ISBN);
}
