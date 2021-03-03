package com.testapplication.bookdetails.repo;

import com.testapplication.bookdetails.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BookRepo extends JpaRepository<Book, String> {


    //void deleteBookByIsbn(String isbn);

    Optional<Book> findBookByIsbn(String isbn);
}
