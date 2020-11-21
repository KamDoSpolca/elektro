import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { StoresComponent } from './store/stores/stores.component';
import { MyStoreComponent } from './store/mystore/mystore.component';
import { CreateComponent } from './products/create/create.component';
import { EditComponent } from './products/edit/edit.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'userinfo', component: UserComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'mystore', component: MyStoreComponent },
  { path: 'products/create', component: CreateComponent },
  { path: 'products/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
