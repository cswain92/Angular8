import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactivedemo',
  templateUrl: './reactivedemo.component.html',
  styleUrls: ['./reactivedemo.component.css']
})
export class ReactivedemoComponent {
public txtName = new FormControl('Chiranjib');
public lstCities = new FormControl('Delhi');

public UpdateName() {
  this.txtName.setValue('Chandrakanta');
}

}
