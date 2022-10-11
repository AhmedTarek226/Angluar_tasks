import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AccountService } from 'src/service/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
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
  }

}
