import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent  {
public SubmitClick(obj) {
alert(obj.txtName + ' is shipped to ' + obj.shippedTo);
}
}
