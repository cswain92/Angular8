import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterationdemo',
  templateUrl: './iterationdemo.component.html',
  styleUrls: ['./iterationdemo.component.css']
})
export class IterationdemoComponent {
  public Products = [
    {
      Name: 'Laptop',
      Price: '43000'
    },
    {
      Name: 'MI Mobile',
      Price: '13000'
    }
  ];
  public txtName;
  public txtPrice;

  public NewProduct = {
    Name: '',
    Price: ''
};
public AddProduct() {
  alert('Product Added....');
  this.NewProduct = {
    Name: this.txtName,
    Price: this.txtPrice,
  };
  this.Products.push(this.NewProduct);
  this.txtName = '';
  this.txtPrice = '';
}
public DeleteClick(index) {
  const Status = confirm('Are you sure, you want to delete?');
  if (Status === true) {
     this.Products.splice(index, 1);
    }
  }
}
