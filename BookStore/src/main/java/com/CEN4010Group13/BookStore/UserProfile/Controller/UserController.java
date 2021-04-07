package com.CEN4010Group13.BookStore.UserProfile.Controller;

import com.CEN4010Group13.BookStore.UserProfile.Entity.Card;
import com.CEN4010Group13.BookStore.UserProfile.Entity.User;
import com.CEN4010Group13.BookStore.UserProfile.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * This is the controller class for the user service.
 */
@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private final UserService service;

    public UserController (UserService service) {
        this.service = service;
    }

    /**
     * This adds a user.
     *
     * @param user is the user to be saved.
     * @return the user saved.
     */
    @PostMapping("/addUser")
    public User addUser(@RequestBody User user) {
        return service.saveUser(user);
    }

    /**
     * This adds users.
     *
     * @param users is the list of users to be saved.
     * @return the users saved.
     */
    @PostMapping("/addUsers")
    public List<User> addUsers(@RequestBody List<User> users) {
        return service.saveUsers(users);
    }

    /**
     * This finds a user by ID.
     *
     * @param id is the user ID.
     * @return the user.
     */
    @GetMapping("/userByID/{id}")
    public User findById(@PathVariable int id) {
        return service.getById(id);
    }

    /**
     * This finds a user by name.
     *
     * @param name is the user's name.
     * @return the user.
     */
    @GetMapping("/userByName/{name}")
    public User findByName(@PathVariable String name) {
        return service.getByName(name);
    }

    /**
     * This finds a user by user name.
     *
     * @param userName is the user's user name.
     * @return the user.
     */
    @GetMapping("/user/{userName}")
    public User findByUserName(@PathVariable String userName) {
        return service.getByUserName(userName);
    }

    /**
     * This gets all users.
     *
     * @return the list of users.
     */
    @GetMapping("/users")
    public List<User> getAll() {
        return service.getUsers();
    }

    /**
     * This finds updates a user.
     *
     * @param user is the user to be updated.
     * @return the user.
     */
    @PutMapping("/update")
    public User updateUser(@RequestBody User user) {
        return service.updateUser(user);
    }

    /**
     * This gets a user's password.
     *
     * @param user is the user
     * @return the password
     */
    @GetMapping("/getPassword/{user}")
    public String getPassword (@PathVariable User user) {
        return service.getPassword(user);
    }

    /**
     * This sets a user's password.
     *
     * @param user is the user.
     * @param password is the password to be set.
     * @return the user.
     */
    @PutMapping("/setPassword/{password}")
    public User setPassword (User user, @PathVariable String password) {
        return service.setPassword(user, password);
    }

    /**
     * This adds a card.
     *
     * @param user is the user.
     * @param card holds the credit card information.
     * @return the user.
     */
    @PutMapping("/setCard")
    public User setCardInfo(User user, Card card) {
        return service.setCardInfo(user, card);
    }

    /**
     * This adds a shipping address.
     *
     * @param user is the user.
     * @param shippingAddress is the shipping address being saved.
     */
    @PutMapping("/setAddress")
    public User setShippingAddress(User user, String shippingAddress) {
        return service.setShippingAddress(user, shippingAddress);
    }

    /**
     * This deletes a user by ID.
     *
     * @param id is the user's ID.
     * @return the user deleted.
     */
    @DeleteMapping("/delete/{id}")
    public User deleteUser(@PathVariable int id) {
        return service.deleteById(id);
    }

    /**
     * Delete all users.
     */
    @DeleteMapping("/delete")
    public void deleteAll() {
        service.deleteAll();
    }
}
