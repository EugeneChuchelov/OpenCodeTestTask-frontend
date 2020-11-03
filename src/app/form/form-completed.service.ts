import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {FormCompleted} from "../model/form.completed";
import {api} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class FormCompletedService {

  constructor(private http: HttpClient) {
  }

  private formUrl = api.completed_form;

  public addForm(form: FormCompleted) {
    return this.http.post<FormCompleted>(this.formUrl, form);
  }

  public getForms(username: string) {
    return this.http.get<FormCompleted[]>(this.formUrl + "/" + username);
  }
}

