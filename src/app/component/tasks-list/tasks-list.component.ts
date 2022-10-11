import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/service/task.service';
import { Task } from 'src/app/model/Task';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  constructor(private taskService:TaskService) { 
  }
  Subscription!:Subscription;
  tasksList:Task[]=[];

  ngOnInit(): void {
    this.FetchData();
  }

  FetchData(){
    this.Subscription = this.taskService.getAll().subscribe(
      {
        next: (response) => {
          console.log(response)
          this.tasksList = response.Data;
        },
        error: (error) => {
          console.log(error)
        },
      })
  }

}
