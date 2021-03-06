import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { BaseViewComponent } from './base-view/base-view.component';
import { RequestComponent } from './request/request.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guards/auth.guard';
import { ManagerGuard } from './auth-guards/manager.guard';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'empdetails', component: EmployeeDetailComponent, canActivate:[AuthGuard]},
  {path: 'dashboard', component: BaseViewComponent,
  children: [
    {path: '', redirectTo: 'request', pathMatch: 'full'},
    {path: 'mgrdashboard', component: ManagerDashboardComponent, canActivate: [ManagerGuard]},
    {path: 'request', component: RequestComponent},
  ],
  canActivate:[AuthGuard]
  },
  {path: '**', component: BaseViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

