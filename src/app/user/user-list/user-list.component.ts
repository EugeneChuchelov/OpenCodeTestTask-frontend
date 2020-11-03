import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {UserRoleEnum} from "../../model/user-role-enum.model";
import {UserStorage} from "../user.storage";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  isAdmin: boolean;
  users: User[];

  constructor(private router: Router, private userService: UserService,
              private storage: UserStorage) {
  }

  ngOnInit(): void {
    this.isAdmin = this.checkIfAdmin();
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    )
  }

  listCompletedForms(user: User) {
    this.router.navigate(['user-completed-forms'], {state: {user: user}});
  }

  checkIfAdmin(): boolean {
    return this.storage.getRole() === UserRoleEnum.ADMIN.toString();
  }
}
