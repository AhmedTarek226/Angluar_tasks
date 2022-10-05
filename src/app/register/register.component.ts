import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../providers/CustomValidators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  registerform:FormGroup;
  constructor() { 
    this.registerform=new FormGroup({
      name:new FormControl("",[Validators.required]),
      username: new FormControl("",[Validators.required,this.noWhitespaceValidator]),
      email:new FormControl("",[Validators.required,Validators.pattern("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")]),
      password: new FormControl("",[Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    [CustomValidators.MatchValidator('password', 'confirmPassword')]
    )
  }


  get passwordMatchError() {
    return (
      this.registerform.getError('mismatch') &&
      this.registerform.get('confirmPassword')?.touched
    );
  }

  public noWhitespaceValidator(control: FormControl) {
    const isSpace = (control.value || '').match(/\s/g);
    return isSpace ? {'whitespace': true} : null;
  }

  ngOnInit(): void {
  }

  Register(){
    
  }
}
