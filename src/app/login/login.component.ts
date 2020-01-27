import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String = "xyz@gmail.com";
  password:String = "";

  constructor() { }

  ngOnInit() {
  }

  login() {
    if(this.email === 'akb@gmail.com' && this.password === '12345'){
      console.log('aaa');
    }
  }

}