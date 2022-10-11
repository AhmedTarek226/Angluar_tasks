import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/component/header/header.component';
import { FooterComponent } from '../app/component/footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './main/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../app/component/navbar/navbar.component';
import { ProductlistComponent } from '../app/component/productlist/productlist.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { ProductParentComponent } from './component/product-parent/product-parent.component';
import { ProductChildComponent } from './component/product-child/product-child.component';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AppRoutingModule } from 'src/app-routing/app-routing.module';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { TasksListComponent } from './component/tasks-list/tasks-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from 'src/service/api/loader.interceptor';
import { AuthInterceptor } from 'src/service/api/auth.interceptor';
import { HttpInterceptors } from 'src/service/httpInterceptors';
import { LoaderComponent } from './component/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductsComponent,
    NavbarComponent,
    ProductlistComponent,
    CreateProductComponent,
    ProductParentComponent,
    ProductChildComponent,
    HomeComponent,
    DashboardComponent,
    CreateTaskComponent,
    TasksListComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpInterceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
