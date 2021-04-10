package com.CEN4010Group13.BookStore.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.CEN4010Group13.BookStore.model.topBookSort;

public interface topBookRepo extends JpaRepository<topBookSort, Long>
{
}
