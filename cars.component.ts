import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent  {
public cars = [
{
 Name: 'Lamborghini',
 Photo: 'assets/lamborghini.jpg',
 Likes: 0,
 Dislikes: 0
},
{
  Name: 'Audi',
  Photo: 'assets/audi.jpg',
  Likes: 0,
  Dislikes: 0
}
];
public LikesClick(car) {
 car.Likes++;
}
public DislikesClick(car) {
 car.Dislikes++;
}
}
