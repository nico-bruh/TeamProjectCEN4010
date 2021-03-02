package com.CEN4010Group13.BookStore.UserProfile.Repository;

import com.CEN4010Group13.BookStore.UserProfile.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByName(String name);
    User findByUserName(String userName);
    User deleteById(int id);
}
