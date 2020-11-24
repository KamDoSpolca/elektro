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
import { AuthGuard } from './authentication/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'stores', component: StoresComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegistrationComponent },
  { path: 'userinfo', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'mystore', component: MyStoreComponent, canActivate: [AuthGuard] },
  { path: 'products/create', component: CreateComponent, canActivate: [AuthGuard] },
  { path: 'products/edit', component: EditComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
