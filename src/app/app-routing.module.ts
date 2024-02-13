import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { StudentListComponent } from './student-list/student-list.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ChatsComponent } from './chats/chats.component';
const routes: Routes = [
{path: '', redirectTo:'login',pathMatch:'full'},
{path: 'login',component: LoginComponent},
{path: 'register',component: RegisterComponent},
{path: 'dashboard',component: DashboardComponent},
{path:'forget-password',component:ForgetPasswordComponent},
{path:'verify-email',component:VerifyEmailComponent},
{path:'list',component:StudentListComponent},
{path:'blogs',component:BlogsComponent},
{path:'chats',component:ChatsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
