import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
const routes: Routes = [
{path: '', redirectTo:'login',pathMatch:'full'},
{path: 'login',component: LoginComponent},
{path: 'register',component: RegisterComponent},
{path: 'dashboard',component: DashboardComponent},
{path:'forget-password',component:ForgetPasswordComponent},
{path:'verify-email',component:VerifyEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
