import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddUserComponent} from './user/add-user/add-user.component';
import {FormsModule} from "@angular/forms";
import {UserService} from "./user/user.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './user/login/login.component';
import {LoginService} from "./user/login.service";
import {FormListComponent} from './form/form-list/form-list.component';
import {Interceptor} from "./app.interceptor";
import {UserListComponent} from './user/user-list/user-list.component';
import {FormService} from "./form/form.service";
import {HeaderComponent} from './user/current-user/header.component';
import {UserStorage} from "./user/user.storage";
import {FormConstructorComponent} from './form/form-constructor/form-constructor.component';
import {FormCompleteComponent} from './form/form-complete/form-complete.component';
import {UserCompletedFormsComponent} from './user/user-completed-forms/user-completed-forms.component';
import {FormCompletedService} from "./form/form-completed.service";
import {ViewFormCompletedComponent} from './form/view-form-completed/view-form-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    LoginComponent,
    FormListComponent,
    UserListComponent,
    HeaderComponent,
    FormConstructorComponent,
    FormCompleteComponent,
    UserCompletedFormsComponent,
    ViewFormCompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, LoginService, UserStorage, FormService, FormCompletedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
