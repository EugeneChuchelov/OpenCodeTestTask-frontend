import {Component, OnInit} from '@angular/core';
import {Form} from "../../model/form.model";
import {Router} from "@angular/router";
import {FormService} from "../form.service";
import {UserStorage} from "../../user/user.storage";
import {UserRoleEnum} from "../../model/user-role-enum.model";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  forms: Form[];
  isAdmin: boolean;

  constructor(private router: Router, private formService: FormService,
              private storage: UserStorage, private userService: UserService) {
  }

  ngOnInit(): void {
    this.isAdmin = this.checkIfAdmin();
    this.formService.getForms().subscribe(
      data => {
        this.forms = data;
      }
    );
  }

  addForm() {
    this.router.navigate(['form-constructor']);
  }

  editForm(form: Form) {
    this.router.navigate(['form-constructor'], {state: {form: form}});
  }

  completeForm(form: Form) {
    this.router.navigate(['form-complete'], {state: {form: form}});
  }

  checkIfAdmin(): boolean {
    return this.storage.getRole() === UserRoleEnum.ADMIN.toString();
  }

}
