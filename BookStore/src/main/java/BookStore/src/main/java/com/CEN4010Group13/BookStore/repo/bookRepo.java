package com.CEN4010Group13.BookStore.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.CEN4010Group13.BookStore.model.bookSort;


public interface bookRepo extends JpaRepository<bookSort, Long>
{
}



