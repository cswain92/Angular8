import { ShoppingcartComponent } from './../shoppingcart/shoppingcart.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , FormGroup, ReactiveFormsModule, FormControl} from '@angular/forms';
import { Component, OnInit , NgModule, Inject, Input, Directive, ViewChild } from '@angular/core';



@Component({
  selector: 'app-emailvalidator',
  templateUrl: './emailvalidator.component.html',
  styleUrls: ['./emailvalidator.component.css']
})

export class EmailvalidatorComponent  {
  public firstName = '';
  public lastName = '';
  public txtEmail = '';
  public txtPwd = '';
  public showDomainError = false;
  public msg = '';
  public form = '';
  public mainForm = false;
  public extraDiv = true;
  public msgSuccess = '';
  public langValue= 'Oriya';
  // @ViewChild('frmRegister') form:any;

    // public lang = [
    //   'English', 'French', 'German', 'Hindi'
    //  ];

public VerifyEmail(email) {
  if (email && email.indexOf('@') !== -1) {
    let [_, domain] = email.split('@');
    if (domain !== 'gmail.com') {
      this.showDomainError = true;
      this.msg = 'Please use only gmail.com domain';
    } else {
      this.msg = 'domain verified...';
      this.showDomainError = false;
    }
  }
  return null;
}
public FormSubmit(data){
  this.mainForm=true;
  this.extraDiv = false;
  this.msgSuccess = 'form submitted successfully...';

}


}
