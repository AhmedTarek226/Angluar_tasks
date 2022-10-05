import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name:string = "Ahmed Tarek";
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    alert(`el main tmam ya ${this.name}`)
  }

  changeName(val:any){
    console.log(val)
  }

}
