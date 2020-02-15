import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

  public Data = [
    {
Catagory: 'Electronics',
Products: ['Samsung TV', 'Mi Mobile' ]
    },
    {
Catagory: 'Shoes',
Products: ['Nike Boot', 'Lee Cooper Boot', 'Lencer Boot' ]
    },
    {
      Catagory: 'Grossery',
      Products: ['Oil', 'Masala','Atta' ]
    }
  ];

}
