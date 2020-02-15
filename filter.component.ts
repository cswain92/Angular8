import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  {
@Input() public AllCount=0; 
@Input() public ElectronicsCount=0;
@Input() public ShoesCount=0;

public checked = 'All';

@Output() public CheckboxChangedEvent : EventEmitter<string> = new EventEmitter<string>();

public CheckChange(){
  this.CheckboxChangedEvent.emit(this.checked);
  alert(this.checked);
}

}
