import { CaptchaService } from './../captcha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public code;

  constructor(private Captcha: CaptchaService) { }

  ngOnInit() {
    this.code = this.Captcha.GenerateCode();
  }

}
