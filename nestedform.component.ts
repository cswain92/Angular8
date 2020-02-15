import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-nestedform',
  templateUrl: './nestedform.component.html',
  styleUrls: ['./nestedform.component.css']
})
export class NestedformComponent {

public frmRegister = new FormGroup({
  Name: new FormControl(''),
  Price: new FormControl(''),
  frmDetails: new FormGroup({
    City: new FormControl(''),
    IsInStock: new FormControl('')
  })
});
public UpdateDetails() {
  this.frmRegister.patchValue({
    Name: 'Samsung TV',
    Price: 45000,
    frmDetails: {
      City: 'Bbsr',
      IsInStock: true,
    }
  });
}

}
