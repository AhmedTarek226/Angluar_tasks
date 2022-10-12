<<<<<<< HEAD
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AccountService } from 'src/service/account.service';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 33a712f1db58b24781eb0f1199488dad7d29be7b

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
<<<<<<< HEAD
export class NavbarComponent implements OnInit,OnChanges {
  isAdmin:boolean;
  constructor(private accountService:AccountService) { 
    this.isAdmin = this.accountService.isStatusAdmin();
  }
   
  ngOnInit(): void {
    this.accountService.getStatusAdmin().subscribe((data)=>{
      this.isAdmin = data;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.accountService.getStatusAdmin().subscribe((data)=>{
      this.isAdmin = data;
    })
  }

  setAdmin(){
    this.accountService.setAdminInStorage("true");
    this.isAdmin = this.accountService.isStatusAdmin();
  }

  setUser(){
    this.accountService.setAdminInStorage("false");
    this.isAdmin = this.accountService.isStatusAdmin();
=======
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
>>>>>>> 33a712f1db58b24781eb0f1199488dad7d29be7b
  }

}
