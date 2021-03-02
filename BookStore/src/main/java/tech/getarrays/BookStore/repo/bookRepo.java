package tech.getarrays.BookStore.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.BookStore.model.bookSort;

public interface bookRepo extends JpaRepository<bookSort, Long>
{
}
