package com.CEN4010Group13.BookStore.UserProfile.Service;

import com.CEN4010Group13.BookStore.UserProfile.Entity.User;
import com.CEN4010Group13.BookStore.UserProfile.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User saveUser(User user) {
        return repository.save(user);
    }

    public List<User> saveUsers(List<User> users) {
        return repository.saveAll(users);
    }

    public List<User> getUsers() {
        return repository.findAll();
    }

    public User getById(int id) {
        return repository.findById(id).orElse(null);
    }

    public User getByName(String name) {
        return repository.findByName(name);
    }

    public User getByUserName(String userName) {
        return repository.findByUserName(userName);
    }

    public User deleteById(int id) {
        return repository.deleteById(id);
    }

    public User setName(User user, String name) {
        User tempUser = repository.findById(user.getId()).orElse(null);

        if (tempUser == null)
            return null;

        tempUser.setName(name);
        return repository.save(tempUser);
    }

    public User setUserName(User user, String username) {
        User tempUser = repository.findById(user.getId()).orElse(null);

        if (tempUser == null)
            return null;

        tempUser.setUserName(username);
        return repository.save(tempUser);
    }

    public User setPassword(User user, String password) {
        User tempUser = repository.findById(user.getId()).orElse(null);

        if (tempUser == null)
            return null;

        tempUser.setPassword(password);
        return repository.save(tempUser);
    }

    public User setEmail(User user, String email) {
        User tempUser = repository.findById(user.getId()).orElse(null);

        if (tempUser == null)
            return null;

        tempUser.setEmail(email);
        return repository.save(tempUser);
    }

    public User setHomeAddress(User user, String homeAddress) {
        User tempUser = repository.findById(user.getId()).orElse(null);

        if (tempUser == null)
            return null;

        tempUser.setHomeAddress(homeAddress);
        return repository.save(tempUser);
    }

    public User setShippingAddress(User user, String shippingAddress) {
        User tempUser = repository.findById(user.getId()).orElse(null);

        if (tempUser == null)
            return null;

        if (user.getShippingAddress1() == null)
            tempUser.setShippingAddress1(shippingAddress);
        else if (user.getShippingAddress2() == null)
            tempUser.setShippingAddress2(shippingAddress);
        else
            tempUser.setShippingAddress3(shippingAddress);

        return repository.save(tempUser);
    }

    public User setCardInfo(User user, long cardNumber, String expDate, int cvc) {

        if (user.getCardNumber1() == 0) {
            user.setCardNumber1(cardNumber);
            user.setExpirationDate1(expDate);
            user.setCvc1(cvc);
        }
        else if (user.getCardNumber2() == 0) {
            user.setCardNumber2(cardNumber);
            user.setExpirationDate2(expDate);
            user.setCvc2(cvc);
        }
        else {
            user.setCardNumber3(cardNumber);
            user.setExpirationDate3(expDate);
            user.setCvc3(cvc);
        }

        return repository.save(user);
    }

    public User updateUser(User user) {
        User existingUser = repository.findById(user.getId()).orElse(null);

        if (existingUser == null)
            return null;

        existingUser.setName(user.getName());
        existingUser.setUserName(user.getUserName());
        existingUser.setPassword(user.getPassword());
        existingUser.setEmail(user.getEmail());
        existingUser.setHomeAddress(user.getHomeAddress());

        return repository.save(existingUser);
    }
}
