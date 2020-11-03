import {Injectable} from "@angular/core";
import {UserRoleEnum} from "../model/user-role-enum.model";
import {UserService} from "./user.service";
import {User} from "../model/user.model";

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'Username';
const ROLE_KEY = 'Role';

@Injectable()
export class UserStorage {

  constructor(private userService: UserService) {
  }

  signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public saveUsername(name: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, name)
  }

  public saveRole(role: UserRoleEnum) {
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY, role)
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  user: User;

  public getUser(): User {
    let username = this.getUsername();
    this.userService.getOne(username).subscribe(data => {
      this.user = data
    });
    return this.user;
  }

  public getRole(): UserRoleEnum {
    return UserRoleEnum[sessionStorage.getItem(ROLE_KEY)];
  }
}
