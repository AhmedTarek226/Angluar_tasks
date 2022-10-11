import { Task } from "src/app/model/Task";

export class ApiResponse{
    Data:Task[]=[];
    Message="";
    Success=true;
    IsAuthorized=true
}