import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  constructor() {
    this.loginform = new FormGroup({
      email:new FormControl("",[Validators.required,Validators.pattern("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")]),
      password: new FormControl("",[Validators.required,Validators.minLength(8)])
    })
   }

  ngOnInit(): void {
  }

  login(){
    
  }

}
