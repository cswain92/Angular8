import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicvalidation',
  templateUrl: './dynamicvalidation.component.html',
  styleUrls: ['./dynamicvalidation.component.css']
})
export class DynamicvalidationComponent {
public pic;
public tip;
public regExp;
public mobileError;

public SelectedCountryChanged(countryName){
  switch (countryName) {
    case 'India':
    this.pic = 'assets/india.jpg';
    this.tip = 'India calling code is +91 and followed by 10 digits';
    this.regExp = /\+91[0-9]{10}/;
    break;
    case 'US':
    this.pic = 'assets/us.jpg';
    this.tip = 'US calling code is +001 and followed by 6 digits';
    this.regExp = /\+001[0-9]{6}/;
    break;
    case 'UK':
    this.pic = 'assets/uk.jpg';
    this.tip = 'UK calling code is +44 and followed by 6 digits';
    this.regExp = /\+44[0-9]{8}/;
    break;
  }
}
public VerifyMobile(mobile) {
if (mobile.match(this.regExp)) {
 this.mobileError = 'Mobile Verified Successfully..';
} else {
  this.mobileError = 'Invalid Mobile number Please check calling code!!';
}
}
}
