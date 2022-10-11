import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/service/task.service';
import { Task } from "../../model/Task";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  addTaskForm: FormGroup;
  task!:Task;

  constructor(private taskService:TaskService) {
    this.addTaskForm = new FormGroup({
      Title:new FormControl("",[Validators.required,Validators.minLength(3)]),
      IsDone:new FormControl(false,[Validators.required]),
      CreatedDate: new FormControl(Date.now),
      ID:new FormControl(0)
    })
  }
  /* ID:number;
    Title:string;
    IsDone:boolean;
    CreatedDate:Date;
*/
  ngOnInit(): void {
  }

  AddTask(){
    this.task = this.addTaskForm.value as Task
    // this.taskService.add(this.task)
  }

}


