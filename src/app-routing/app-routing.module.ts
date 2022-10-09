import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from 'src/app/component/home/home.component';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard.component';
import { ProductParentComponent } from 'src/app/component/product-parent/product-parent.component';

let routes:Routes=[
  {path:"home",component:HomeComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"product",component:ProductParentComponent}
  
]

@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
