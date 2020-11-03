import {Component} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {UserSignUp} from "../../model/user-signup.model";
import {UserRoleEnum} from "../../model/user-role-enum.model";

@Component({
  selector: 'app-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user: UserSignUp = new UserSignUp();
  error = false;
  keys = Object.keys;
  roles = UserRoleEnum;

  constructor(private router: Router, private userService: UserService) {
  }

  createUser() {
    if (this.user.username === undefined || this.user.username === '' ||
      this.user.role === undefined ||
      this.user.password === undefined || this.user.password === '') {
      this.error = true;
      return;
    }
    this.userService.addUser(this.user).subscribe();
    this.router.navigate(["login"]);
  }
}
