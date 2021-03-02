package tech.getarrays.BookStore.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.*;
import java.io.Serializable;

    @Entity
    public class bookSort implements Serializable {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Column(nullable = false, updatable = false)
        private Long BookID;
        private String bookName;
        private String bookAuthor;
        private String bookCoverURL;
        private String bookGenre;
        private Double bookRating;
        private Double bookPrice;
        private Integer bookDate;

        public bookSort(Long bookID, String bookName, String bookAuthor, String bookCoverURL, String bookGenre, Double bookRating, Double bookPrice, Integer bookDate) {
            BookID = bookID;
            this.bookName = bookName;
            this.bookAuthor = bookAuthor;
            this.bookCoverURL = bookCoverURL;
            this.bookGenre = bookGenre;
            this.bookRating = bookRating;
            this.bookPrice = bookPrice;
            this.bookDate = bookDate;
        }

        public bookSort() {}

        public Long getBookID()
        {
            return BookID;
        }
        public void setBookID(Long bookID)
        {
            BookID = bookID;
        }

        public String getBookName()
        {
            return bookName;
        }
        public void setBookName(String bookName) { this.bookName = bookName; }

        public String getBookAuthor()
        {
            return bookAuthor;
        }
        public void setBookAuthor(String bookAuthor)
        {
            this.bookAuthor = bookAuthor;
        }

        private String getBookCoverURL() {
            return bookCoverURL;
        }
        public void setBookCoverURL(String bookCoverURL) {
            this.bookCoverURL = bookCoverURL;
        }

        public String getBookGenre() { return bookGenre; }
        public void setBookGenre(String bookGenre) { this.bookGenre = bookGenre; }

        public Double getBookRating() {
            return bookRating;
        }
        public void setBookRating(Double bookRating) {
            this.bookRating = bookRating;
        }

        public Double getBookPrice() {return bookPrice;}
        public void setBookPrice(Double bookPrice) {this.bookPrice = bookPrice; }

        public Integer getBookDate() { return bookDate; }
        public void setBookDate(Integer bookDate) { this.bookDate = bookDate; }

        @Override
        public String toString() {
            return "bookSort{" +
                    "BookID=" + BookID +
                    ", bookName='" + bookName + '\'' +
                    ", bookAuthor='" + bookAuthor + '\'' +
                    ", bookCoverURL='" + bookCoverURL + '\'' +
                    ", bookGenre='" + bookGenre + '\'' +
                    ", bookRating=" + bookRating +
                    ", bookPrice=" + bookPrice +
                    ", bookDate=" + bookDate +
                    '}';
        }
    }




