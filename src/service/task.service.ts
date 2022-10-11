import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/ViewModel/ApiResult';
import { Task } from 'src/app/model/Task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<ApiResponse> {
      return this.http.get<ApiResponse>("https://api.mohamed-sadek.com/task/get")
  }
}
