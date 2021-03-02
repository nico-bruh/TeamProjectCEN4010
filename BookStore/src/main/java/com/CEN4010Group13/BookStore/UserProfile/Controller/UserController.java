package com.CEN4010Group13.BookStore.UserProfile.Controller;

import com.CEN4010Group13.BookStore.UserProfile.Entity.User;
import com.CEN4010Group13.BookStore.UserProfile.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user) {
        return service.saveUser(user);
    }

    @PostMapping("/addUsers")
    public List<User> addUsers(@RequestBody List<User> users) {
        return service.saveUsers(users);
    }

    @GetMapping("/user/{id}")
    public User findById(@PathVariable int id) {
        return service.getById(id);
    }

    @GetMapping("/user/{name}")
    public User findByName(@PathVariable String name) {
        return service.getByName(name);
    }

    @GetMapping("/user/{userName}")
    public User findByUserName(@PathVariable String userName) {
        return service.getByUserName(userName);
    }

    @GetMapping("/products")
    public List<User> getAll() {
        return service.getUsers();
    }

    @PutMapping("/update")
    public User updateUser(@RequestBody User user) {
        return service.updateUser(user);
    }

    @DeleteMapping("/delete/{id}")
    public User deleteUser(@PathVariable int id) {
        return service.deleteById(id);
    }
}
