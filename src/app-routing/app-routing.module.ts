import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from 'src/app/component/home/home.component';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard.component';
import { ProductParentComponent } from 'src/app/component/product-parent/product-parent.component';
import { CreateTaskComponent } from 'src/app/component/create-task/create-task.component';
import { TasksListComponent } from 'src/app/component/tasks-list/tasks-list.component';
import { LoginComponent } from 'src/app/component/login/login.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

let routes:Routes=[
  // {path:"dashboard",component:DashboardComponent},
  {path:"product",component:ProductParentComponent,canActivate:[AuthGuard]},
  {path:'tasks',component:CreateTaskComponent,children:[
        {path:'',component:TasksListComponent,pathMatch:"full"},
    ]},
   {path:'dashboard',component:DashboardComponent,children:[
       {path:'',component:DashboardComponent,pathMatch:"full"},
   ]} ,
   {path:'user',component:LoginComponent,children:[
    {path:'',component:LoginComponent,pathMatch:"full"},
    {path:"home",component:HomeComponent},
    ]} ,
    {
      path:'account',
      loadChildren:()=> import('../app/component/account/account.module').then(m=>m.AccountModule)
    }
]

@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
