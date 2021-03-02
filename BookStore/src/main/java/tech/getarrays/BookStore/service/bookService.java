package tech.getarrays.BookStore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.BookStore.model.bookSort;
import tech.getarrays.BookStore.repo.bookRepo;

import java.util.List;

@Service
public class bookService
{
    private final bookRepo repo;

    @Autowired
    public bookService(bookRepo repo) {
        this.repo = repo;
    }

    public List<bookSort> getAllBooks() {return repo.findAll();}
}
