import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/component/header/header.component';
import { FooterComponent } from '../app/component/footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './main/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { NavbarComponent } from '../app/component/navbar/navbar.component';
=======
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from '../app/component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';
>>>>>>> 33a712f1db58b24781eb0f1199488dad7d29be7b
import { ProductlistComponent } from '../app/component/productlist/productlist.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { ProductParentComponent } from './component/product-parent/product-parent.component';
import { ProductChildComponent } from './component/product-child/product-child.component';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AppRoutingModule } from 'src/app-routing/app-routing.module';
<<<<<<< HEAD
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { TasksListComponent } from './component/tasks-list/tasks-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from 'src/service/api/loader.interceptor';
import { AuthInterceptor } from 'src/service/api/auth.interceptor';
import { HttpInterceptors } from 'src/service/httpInterceptors';
import { LoaderComponent } from './component/loader/loader.component';
=======
>>>>>>> 33a712f1db58b24781eb0f1199488dad7d29be7b

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductsComponent,
    NavbarComponent,
<<<<<<< HEAD
=======
    RegisterComponent,
>>>>>>> 33a712f1db58b24781eb0f1199488dad7d29be7b
    ProductlistComponent,
    CreateProductComponent,
    ProductParentComponent,
    ProductChildComponent,
    HomeComponent,
    DashboardComponent,
<<<<<<< HEAD
    CreateTaskComponent,
    TasksListComponent,
    LoaderComponent,
=======

>>>>>>> 33a712f1db58b24781eb0f1199488dad7d29be7b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    HttpClientModule
  ],
  providers: [
    HttpInterceptors
=======
    AppRoutingModule
>>>>>>> 33a712f1db58b24781eb0f1199488dad7d29be7b
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
