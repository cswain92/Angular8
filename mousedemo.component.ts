import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mousedemo',
  templateUrl: './mousedemo.component.html',
  styleUrls: ['./mousedemo.component.css']
})
export class MousedemoComponent {

  public styleObj;
  public Animate(event) {
this.styleObj = {
  position: 'fixed',
  left: event.clientX + 'px',
  top: event.clientY + 'px'
};
return this.styleObj;
  }

}
