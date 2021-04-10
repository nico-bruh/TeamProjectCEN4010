import { HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingCart } from './shoppingcart';
import { ShoppingcartService } from './shoppingcart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public shoppingCartItems : ShoppingCart[];
  public bookStoreUser : number = 1;
  public bookQuantity : ShoppingCart;

  data = [
  {
    bookStoreUserCart: 1,
    bookName : "Captain Underpants",
    saveForLater: false,
    quantityInCart: 3,
    price : 10.0
  }, 
  {
    bookStoreUserCart: 1,
    bookName : "Diary of a Wimpy Kid",
    saveForLater: false,
    quantityInCart: 3,
    price : 15.0
  },
  {
    bookStoreUserCart: 1,
    bookName : "Captain Underpants 2",
    saveForLater: true,
    quantityInCart: 3,
    price : 30.0
  }, 
  {
    bookStoreUserCart: 1,
    bookName : "Captain Underpants 3",
    saveForLater: false,
    quantityInCart: 5,
    price : 45.0
  }
];

  public sumOfCart : number;
  public sizeOfCart : number;

  constructor(private shoppingCartService: ShoppingcartService) {}

  ngOnInit() {
    this.getItems();
  }

  public getItems() : void {
    this.shoppingCartService.getShoppingCartItems().subscribe(
      (response : ShoppingCart[]) => {
        this.shoppingCartItems = response;
        this.calculateSumOfCartAndSize();
      }, 
      (error : HttpErrorResponse) => {
        alert("Backend offline");
      }
    )
  }

  public calculateSumOfCartAndSize() : void {
    this.sumOfCart = 0;
    this.sizeOfCart = 0;
    this.shoppingCartItems.forEach((elem) => {
      if(!elem.saveForLater && this.bookStoreUser === elem.userId)
      {
        this.sumOfCart = this.sumOfCart + (elem.bookPrice * elem.quantityInCart);
        this.sizeOfCart += 1;
      }
    })
  }

  public onAddBook(updateBookForm: NgForm) : void {
    //document.getElementById('updateModal').click();
    this.shoppingCartService.updateShoppingCartItems(updateBookForm.value).subscribe(
      (response: ShoppingCart) => {
        console.log(response);
        this.getItems();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateBook(book : ShoppingCart) : void {
    document.getElementById('close-modal-butt').click();
    this.shoppingCartService.updateShoppingCartItems(book).subscribe(
      (response: ShoppingCart) => {
        console.log(response);
        this.getItems();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onSaveBook(book : ShoppingCart) : void {
    document.getElementById('close-save-butt').click();
    this.shoppingCartService.saveShoppingCartItems(book).subscribe(
      (response: ShoppingCart) => {
        console.log(response);
        this.getItems();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onRemoveBook(bookISBN : number) : void {
    document.getElementById('close-save-butt').click();
    this.shoppingCartService.deleteShoppingCartItems(bookISBN).subscribe(
      (response: void) => {
        this.getItems();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddBackBook(book : ShoppingCart) : void {
    document.getElementById('close-add-butt').click();
    this.shoppingCartService.saveShoppingCartItems(book).subscribe(
      (response: ShoppingCart) => {
        console.log(response);
        this.getItems();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(book : ShoppingCart) : void {
    this.bookQuantity = book;
  }
}
