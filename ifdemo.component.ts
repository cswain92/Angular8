import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent  {

public isVisible = false;
public btnText = 'Show';

public Product = {
    Name: 'Samsung TV',
    Price: 23000,
    Photo: '../assets/samsungtv.jpg'
};
public DisplayClick() {
 this.isVisible = (this.isVisible == false) ? true : false;
 this.btnText = (this.btnText == 'Show') ? 'Hide' : 'Show';
}

}
