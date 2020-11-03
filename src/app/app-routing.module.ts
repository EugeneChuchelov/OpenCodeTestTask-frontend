import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddUserComponent} from "./user/add-user/add-user.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {LoginComponent} from "./user/login/login.component";
import {FormListComponent} from "./form/form-list/form-list.component";
import {FormConstructorComponent} from "./form/form-constructor/form-constructor.component";
import {FormCompleteComponent} from "./form/form-complete/form-complete.component";
import {UserCompletedFormsComponent} from "./user/user-completed-forms/user-completed-forms.component";
import {ViewFormCompletedComponent} from "./form/view-form-completed/view-form-completed.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'add', component: AddUserComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'form-list', component: FormListComponent},
  {path: 'form-constructor', component: FormConstructorComponent},
  {path: 'form-complete', component: FormCompleteComponent},
  {path: 'user-completed-forms', component: UserCompletedFormsComponent},
  {path: 'completed-form', component: ViewFormCompletedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
