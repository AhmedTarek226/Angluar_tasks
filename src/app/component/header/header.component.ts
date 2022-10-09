import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  image_source:string = "../../assets/Amazon-Mobile-Saving-Days.webp"
  constructor() { }

  ngOnInit(): void {
  }

}
