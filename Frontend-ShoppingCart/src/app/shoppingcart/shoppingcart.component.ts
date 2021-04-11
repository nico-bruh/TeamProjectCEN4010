import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingCart } from '../shoppingcart';
import { ShoppingcartService } from '../shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  public shoppingCartItems : ShoppingCart[];
  public bookStoreUser : number = 1;
  public bookQuantity : ShoppingCart;

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
