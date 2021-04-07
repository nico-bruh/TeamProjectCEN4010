package com.CEN4010Group13.BookStore.UserProfile.Repository;

import com.CEN4010Group13.BookStore.UserProfile.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * This interface creates a user repository that extends JpaRepository.
 */
public interface UserRepository extends JpaRepository<User, Integer> {
    /**
     * This allows a user to be found using their name.
     *
     * @param name is the user's name.
     * @return the user found.
     */
    User findByName(String name);
    /**
     * This allows a user to be found using their user name.
     *
     * @param userName is the user's user name.
     * @return the user found.
     */
    User findByUserName(String userName);
    /**
     * This allows a user to be deleted by their ID.
     *
     * @param id is the user's ID.
     * @return the user deleted.
     */
    Optional<User> deleteById(int id);
}
