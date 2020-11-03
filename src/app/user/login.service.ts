import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {UserLogin} from "../model/user-login.model";
import {catchError} from "rxjs/operators";
import {api} from "../../environments/environment";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
  }

  private loginUrl = api.login;

  attemptAuth(user: UserLogin): Observable<any> {
    return this.http.post<any>(this.loginUrl, user).pipe(
      catchError(val => of(val)));
  };
}
