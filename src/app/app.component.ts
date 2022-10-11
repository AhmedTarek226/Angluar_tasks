import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/service/api/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'day1_tasks';
  // isLoading:boolean=false;
  isLoading:Subject<boolean>;

  constructor(private loaderService:LoaderService){
    this.isLoading = this.loaderService.isLoading;
  }

  ngOnInit(): void {
  //  this.loaderService.GetLoading().subscribe((data)=>{
  //     this.isLoading = data;
  //   });
    
  }
}
