package com.CEN4010Group13.BookStore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CEN4010Group13.BookStore.model.topBookSort;
import com.CEN4010Group13.BookStore.model.bookSort;

import com.CEN4010Group13.BookStore.repo.bookRepo;
import com.CEN4010Group13.BookStore.repo.topBookRepo;

import java.util.List;

@Service
public class bookService
{
    private final bookRepo repo;
    private final topBookRepo topRepo;


    @Autowired
    public bookService(bookRepo repo, topBookRepo topRepo) {
        this.repo = repo;
        this.topRepo = topRepo;
    }

    public List<bookSort> getAllBooks() {return repo.findAll();}
    public List<topBookSort> getAllTopBooks() {return topRepo.findAll();}
}
