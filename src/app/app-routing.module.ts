import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { HomeComponent } from './MyComponents/home/home.component';
import { SellerAuthComponent } from './MyComponents/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './MyComponents/seller-home/seller-home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'seller-auth',
    component:SellerAuthComponent
  },
  {
    path:'seller-home',
    component:SellerHomeComponent,
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
