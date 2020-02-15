import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onlineshopping',
  templateUrl: './onlineshopping.component.html',
  styleUrls: ['./onlineshopping.component.css']
})
export class OnlineshoppingComponent {
  public categories = ['Select a Category', 'Electronics', 'Shoes'];
  public electronics = ['Select Electronic Product', 'Samsung TV', 'MI Mobile'];
  public shoes = ['Select Shoe Product', 'Nike Casuals', 'Lee Cooper Boot'];
  public selectedProducts = [];
  public selectedCategory;

  public productsData = [
    {
      Name: 'Samsung TV',
      Price: 45000.53,
      Photo: 'assets/samsungtv.jpg'
    },
    {
     Name: 'MI Mobile',
     Price: 15000.53,
     Photo: 'assets/mobile.png'
   },
   {
     Name: 'Nike Casuals',
     Price: 6000.53,
     Photo: 'assets/nikecasual.jpg'
   },
   {
     Name: 'Lee Cooper Boot',
     Price: 3000.53,
     Photo: 'assets/leecooper.jpg'
   }
  ];
  public selectedProduct;
  public searchResults = [];
  public prodName = '';
  public prodPrice = 0;
  public prodPhoto = '';
  public cartItems = [];
  public cartItemsCount = 0;
  public isCartVisible = false;

  public CategoryChanged() {
    switch (this.selectedCategory) {
      case 'Electronics':
        this.selectedProducts = this.electronics;
        break;
        case 'Shoes':
          this.selectedProducts = this.shoes;
          break;
    }
  }

  public ProductChanged() {
    this.searchResults = this.productsData.filter( x =>x.Name === this.selectedProduct);
    this.prodName = this.searchResults[0].Name;
    this.prodPrice = this.searchResults[0].Price;
    this.prodPhoto = this.searchResults[0].Photo;
  }
  public AddToCart() {
    this.cartItems.push(this.searchResults[0]);
    this.cartItemsCount = this.cartItems.length;
  }
  public DeleteCartItem(index) {
     let status = confirm('Are you sure, Want to Delete?');
     if (status === true) {
       this.cartItems.splice(index, 1);
       this.cartItemsCount = this.cartItems.length;
     }
  }
  public ShowCart() {
    this.isCartVisible = (this.isCartVisible === false) ? true : false;
  }
 }
