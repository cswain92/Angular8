import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

public Products = [
  {
    Id: 1,
    Name: 'Samsung TV',
    Price: 34000,
    Photo: 'assets/samsungtv.jpg'
  },
  {
    Id: 2,
    Name: 'MI Mobile',
    Price: 14000,
    Photo: 'assets/mobile.png'
  },
  {
    Id: 3,
    Name: 'POwer Bank',
    Price: 4000,
    Photo: 'assets/powerbank.png'
  },
];
public AddProduct() {
  this.Products = [
    {
      Id: 1,
      Name: 'Samsung TV',
      Price: 34000,
      Photo: 'assets/samsungtv.jpg'
    },
    {
      Id: 2,
      Name: 'MI Mobile',
      Price: 14000,
      Photo: 'assets/mobile.png'
    },
    {
      Id: 3,
      Name: 'POwer Bank',
      Price: 4000,
      Photo: 'assets/powerbank.png'
    },
{
  Id: 4,
  Name: 'Laptop',
  Price: 43000,
  Photo: 'assets/laptop.jpg'
} 

  ];
}
public TrackById(index, Products) {
   return Products.Id;
}
 }
