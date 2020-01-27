import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String = "xyz@gmail.com";
  password:String = "";

  constructor(public router: Router) { }

  ngOnInit() {
  }

  login() {
    if(this.email === 'akb@gmail.com' && this.password === '12345'){
      this.router.navigate(['/']);
    }
  }

}