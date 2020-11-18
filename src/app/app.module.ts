import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { UserComponent } from './user/user.component';
import { StoresComponent } from './stores/stores.component';
import { MenuComponent } from './_menu/_menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from './authentication/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { MyStoreComponent } from './mystore/mystore.component';
import { CreateComponent } from './products/create/create.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent,
    StoresComponent,
    MenuComponent,
    ProductsComponent,
    MyStoreComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
