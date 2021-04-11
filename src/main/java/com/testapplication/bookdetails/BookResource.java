package com.testapplication.bookdetails;

import com.testapplication.bookdetails.exception.UserNotFoundException;
import com.testapplication.bookdetails.model.Book;
import com.testapplication.bookdetails.model.Card;
import com.testapplication.bookdetails.model.User;
import com.testapplication.bookdetails.repo.UserRepository;
import com.testapplication.bookdetails.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("")
public class BookResource {
    @Autowired
    private final BookService bookService;

    public BookResource(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/browse")
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> books = bookService.findAllBooks();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping("{isbn}")
    public ResponseEntity<Book> getBookByISBN(@PathVariable("isbn") String isbn) {
        Book book = bookService.findBookByIsbn(isbn);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    /**
     * This adds a user.
     *
     * @param user is the user to be saved.
     * @return the user saved.
     */
    @PostMapping("/addUser")
    public User addUser(@RequestBody User user) {
        return bookService.saveUser(user);
    }

    /**
     * This adds users.
     *
     * @param users is the list of users to be saved.
     * @return the users saved.
     */
    @PostMapping("/addUsers")
    public List<User> addUsers(@RequestBody List<User> users) {
        return bookService.saveUsers(users);
    }

    /**
     * This finds a user by ID.
     *
     * @param id is the user ID.
     * @return the user.
     */
    @GetMapping("/userByID/{id}")
    public User findById(@PathVariable int id) {
        return bookService.getById(id);
    }

    /**
     * This finds a user by name.
     *
     * @param name is the user's name.
     * @return the user.
     */
    @GetMapping("/userByName/{name}")
    public User findByName(@PathVariable String name) {
        return bookService.getByName(name);
    }

    /**
     * This finds a user by user name.
     *
     * @param userName is the user's user name.
     * @return the user.
     */
    @GetMapping("/user/{userName}")
    public User findByUserName(@PathVariable String userName) {
        return bookService.getByUserName(userName);
    }

    /**
     * This gets all users.
     *
     * @return the list of users.
     */
    @GetMapping("/users")
    public List<User> getAll() {
        return bookService.getUsers();
    }

    /**
     * This finds updates a user.
     *
     * @param user is the user to be updated.
     * @return the user.
     */
    @PutMapping("/update")
    public User updateUser(@RequestBody User user) {
        return bookService.updateUser(user);
    }

    /**
     * This gets a user's password.
     *
     * @param user is the user
     * @return the password
     */
    @GetMapping("/getPassword/{user}")
    public String getPassword (@PathVariable User user) {
        return bookService.getPassword(user);
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
        return bookService.setPassword(user, password);
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
        return bookService.setCardInfo(user, card);
    }

    /**
     * This adds a shipping address.
     *
     * @param user is the user.
     * @param shippingAddress is the shipping address being saved.
     */
    @PutMapping("/setAddress")
    public User setShippingAddress(User user, String shippingAddress) {
        return bookService.setShippingAddress(user, shippingAddress);
    }

    /**
     * This deletes a user by ID.
     *
     * @param id is the user's ID.
     * @return the user deleted.
     */
    @DeleteMapping("/delete/{id}")
    public User deleteUser(@PathVariable int id) {
        return bookService.deleteById(id);
    }

    /**
     * Delete all users.
     */
    @DeleteMapping("/delete")
    public void deleteAll() {
        bookService.deleteAll();
    }


    /**
    @PostMapping("/add")
    public ResponseEntity<Book>  addBook(@RequestBody Book book){
        Book newBook = bookService.updateBook(book);
        return new ResponseEntity<>(newBook, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Book> updateBook(@RequestBody Book book){
        Book updateBook = bookService.updateBook(book);
        return new ResponseEntity<>(updateBook, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{isbn}")
    public void deleteBook(@PathVariable("isbn") String isbn){
        bookService.deleteBook(isbn);
    }
    **/
}
