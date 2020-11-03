import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../model/user.model";
import {UserSignUp} from "../model/user-signup.model";
import {api} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  private userUrl = api.user;

  public addUser(user: UserSignUp) {
    return this.http.post<UserSignUp>(this.userUrl + "/signup", user);
  }

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public getOne(username: string) {
    return this.http.get<User>(this.userUrl + "/" + username)
  }

  public updateUser(user: User) {
    return this.http.put<User>(this.userUrl, user);
  }
}
