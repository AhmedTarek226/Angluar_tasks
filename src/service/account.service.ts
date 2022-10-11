import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isAdmin: BehaviorSubject<boolean>
  constructor(private http:HttpClient,private router:Router) {
    this.isAdmin = new BehaviorSubject<boolean>(this.isStatusAdmin());
   }

   setStatusAdmin(status:boolean){
    this.isAdmin.next(status);
   }

   getStatusAdmin(){
    return this.isAdmin.asObservable();
   }

   isStatusAdmin(): boolean {
    if (localStorage.getItem("isAdmin") == "true") return true
    else return false
  }

   setAdminInStorage(adminStatus:string){
    localStorage.setItem("isAdmin",adminStatus);
   }

   getAdminFromStorage():string|null{
    return localStorage.getItem("isAdmin");
   }
}
