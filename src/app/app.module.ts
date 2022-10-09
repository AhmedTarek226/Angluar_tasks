import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/component/header/header.component';
import { FooterComponent } from '../app/component/footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './main/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from '../app/component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';
import { ProductlistComponent } from '../app/component/productlist/productlist.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { ProductParentComponent } from './component/product-parent/product-parent.component';
import { ProductChildComponent } from './component/product-child/product-child.component';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AppRoutingModule } from 'src/app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductsComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ProductlistComponent,
    CreateProductComponent,
    ProductParentComponent,
    ProductChildComponent,
    HomeComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
