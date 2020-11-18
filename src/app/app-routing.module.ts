import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoresComponent } from './stores/stores.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { MyStoreComponent } from './mystore/mystore.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'userinfo', component: UserComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'mystore', component: MyStoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
