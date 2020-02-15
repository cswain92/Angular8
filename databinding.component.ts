import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
 public Product = {
    Name: ' Samsung TV ',
    Price: 45000 ,
    Qty: 2,
    Mfd: new Date('2019/02/20'),
    InStock: true
 };

}
