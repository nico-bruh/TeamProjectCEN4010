package com.CEN4010Group13.BookStore.UserProfile.Service;

import com.CEN4010Group13.BookStore.UserProfile.Entity.Card;
import com.CEN4010Group13.BookStore.UserProfile.Entity.User;
import com.CEN4010Group13.BookStore.UserProfile.Exceptions.UserNotFoundException;
import com.CEN4010Group13.BookStore.UserProfile.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * This service interacts with the user repository.
 */

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    /**
     * This saves a user.
     *
     * @param user is the user to be saved.
     * @return the user.
     */
    public User saveUser(User user) {
        // Encrypt the password before saving the user
        setPassword(user, user.getPassword());
        return repository.save(user);
    }

    /**
     * This saves a list of users.
     *
     * @param users is the list of users to be saved.
     * @return the list of users.
     */
    public List<User> saveUsers(List<User> users) {
        return repository.saveAll(users);
    }

    /**
     * This gets all of the users.
     *
     * @return the list of users.
     */
    public List<User> getUsers() {
        return repository.findAll();
    }

    /**
     * This finds a user by ID.
     *
     * @param id is the user's id.
     * @return the user.
     */
    public User getById(int id) {
        User user = repository.findById(id).
                orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));

        // Decrypt the password.
        user.setPassword(getPassword(user));
        return user;
    }

    /**
     * This finds a user by name.
     *
     * @param name is the user's name.
     * @return the user.
     */
    public User getByName(String name) {
        User user = repository.findByName(name);

        // Decrypt the password.
        user.setPassword(getPassword(user));
        return user;
    }

    /**
     * This finds a user by user name.
     *
     * @param userName is the user's user name.
     * @return the user.
     */
    public User getByUserName(String userName) {
        User user = repository.findByUserName(userName);

        // Decrypt the password.
        user.setPassword(getPassword(user));
        return user;
    }

    /**
     * This deletes a user.
     *
     * @param id is the user id.
     * @return the user deleted.
     */
    public User deleteById(int id) {
        return repository.deleteById(id).
                orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    /**
     * This sets a user's shipping address.
     *
     * @param user is the user.
     * @param shippingAddress is the address to be set.
     * @return the user.
     */
    public User setShippingAddress(User user, String shippingAddress) {
        User tempUser = repository.findById(user.getId()).orElse(null);

        if (tempUser == null)
            return null;

        // Set the address in the first empty address variable. Overwrite the last one if all are full.
        if (user.getShippingAddress1() == null)
            tempUser.setShippingAddress1(shippingAddress);
        else if (user.getShippingAddress2() == null)
            tempUser.setShippingAddress2(shippingAddress);
        else if (user.getShippingAddress3() == null)
            tempUser.setShippingAddress3(shippingAddress);
        else
            tempUser.setShippingAddress4(shippingAddress);

        return repository.save(tempUser);
    }


    /**
     * This adds a credit card.
     *
     * @param user is the user.
     * @param card holds the credit card information.
     * @return the user.
     */
    public User setCardInfo(User user, Card card) {
        long cardNumber = card.cardNumber;
        String expDate = card.expDate;
        int cvc = card.cvc;

        // Put the card information in the first empty variables. Overwrite the last one if all are full.
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
        else if (user.getCardNumber3() == 0) {
            user.setCardNumber3(cardNumber);
            user.setExpirationDate3(expDate);
            user.setCvc3(cvc);
        }
        else {
            user.setCardNumber4(cardNumber);
            user.setExpirationDate4(expDate);
            user.setCvc4(cvc);
        }

        return repository.save(user);
    }

    /**
     * This sets a user's password.
     *
     * @param user whose password is being changed.
     * @param password is the plain text password.
     * @return the user.
     */
    public User setPassword(User user, String password) {
        StringBuilder encryptedPassword = new StringBuilder();

        // Shift each character 3 spaces.
        for (int i = 0; i < password.length(); i++) {
            encryptedPassword.append((char) (password.charAt(i) + 3));
        }

        user.setPassword(encryptedPassword.toString());
        return repository.save(user);
    }

    /**
     * This gets a user's password.
     *
     * @param user whose password is being retrieved.
     * @return the password.
     */
    public String getPassword(User user) {
       String password = user.getPassword();
       StringBuilder decryptedPassword = new StringBuilder();

       // Shift each character back three spaces.
       for (int i = 0; i < password.length(); i++) {
           decryptedPassword.append((char) (password.charAt(i) - 3));
       }

       // Return the decrypted password.
       return decryptedPassword.toString();
    }

    /**
     * This updates user information.
     *
     * @param user is a user object with the new information.
     * @return the updated user.
     */
    public User updateUser(User user) {
        User existingUser = repository.findById(user.getId()).orElse(null);

        if (existingUser == null)
            return null;

        // Update the user's name, user name, password, email, and home address.
        existingUser.setName(user.getName());
        existingUser.setUserName(user.getUserName());
        setPassword(existingUser, user.getPassword());
        existingUser.setEmail(user.getEmail());
        existingUser.setHomeAddress(user.getHomeAddress());

        // Update shipping addresses.
        existingUser.setShippingAddress1(user.getShippingAddress1());
        existingUser.setShippingAddress2(user.getShippingAddress2());
        existingUser.setShippingAddress3(user.getShippingAddress3());
        existingUser.setShippingAddress4(user.getShippingAddress4());

        // Update credit card information.
        existingUser.setCardNumber1(user.getCardNumber1());
        existingUser.setExpirationDate1(user.getExpirationDate1());
        existingUser.setCvc1(user.getCvc1());

        existingUser.setCardNumber2(user.getCardNumber2());
        existingUser.setExpirationDate2(user.getExpirationDate2());
        existingUser.setCvc2(user.getCvc2());

        existingUser.setCardNumber3(user.getCardNumber3());
        existingUser.setExpirationDate3(user.getExpirationDate3());
        existingUser.setCvc3(user.getCvc3());

        existingUser.setCardNumber4(user.getCardNumber4());
        existingUser.setExpirationDate4(user.getExpirationDate4());
        existingUser.setCvc4(user.getCvc4());

        return repository.save(existingUser);
    }

    /**
     * Delete all users.
     */
    public void deleteAll() {
        repository.deleteAll();
    }
}
