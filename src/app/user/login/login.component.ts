import {Component} from '@angular/core';
import {UserLogin} from "../../model/user-login.model";
import {Router} from "@angular/router";
import {LoginService} from "../login.service";
import {UserService} from "../user.service";
import {UserStorage} from "../user.storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: UserLogin = new UserLogin();
  error = false;

  constructor(private router: Router, private userService: UserService,
              private loginService: LoginService, private storage: UserStorage) {
  }

  login() {
    this.loginService.attemptAuth(this.user).subscribe(
      data => {
        if (data.token != undefined) {
          this.storage.saveToken(data.token);
          this.userService.getOne(this.user.username).subscribe(data => {
              this.storage.saveUsername(data.username);
              this.storage.saveRole(data.role);
              this.router.navigate(['form-list']);
            }
          );
        } else {
          this.error = true;
        }
      }
    );
  }

}
