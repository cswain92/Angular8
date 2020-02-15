import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  public products = [
    {Name: 'Samsung TV', Price:43666.99,Category:'Electronics'},
    {Name: 'MI Mobile',Price:12666.99,Category:'Electronics'},
    {Name: 'Laptop',Price:54786.99,Category:'Electronics'},
    {Name: 'Lee Cooper Boot',Price:3666.99,Category:'Shoes'},
    {Name: 'Nike Casuals',Price:5666.99,Category:'Shoes'},
    {Name: 'Reebook Boot',Price:6588.99,Category:'Shoes'}
    ];

public AllCount = this.products.length;
public ElectronicsCount=this.products.filter(x =>x.Category=='Electronics').length;
public ShoesCount=this.products.filter(x=>x.Category=='Shoes').length;

public checked='All';

public CategoryChanged(selectedCategoryName){
  this.checked=selectedCategoryName;
}


}
