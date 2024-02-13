import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { BlogsComponent } from './blogs/blogs.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AsyncPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService} from './shared/data.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import{MatMenuModule} from '@angular/material/menu';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import{MatAutocompleteModule} from '@angular/material/autocomplete';



import{AngularFireStorageModule}from '@angular/fire/compat/storage';
import{AngularFireMessagingModule} from '@angular/fire/compat/messaging';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import{AngularFireDatabaseModule} from '@angular/fire/compat/database';
import{AngularFireModule} from '@angular/fire/compat'
import { HttpClientModule } from '@angular/common/http';
import { ChatsComponent } from './chats/chats.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
    BlogsComponent,
    StudentListComponent,
    HeaderComponent,
    ChatsComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ToastrModule.forRoot(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatAutocompleteModule,

    
  ],
  providers: [DataService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
