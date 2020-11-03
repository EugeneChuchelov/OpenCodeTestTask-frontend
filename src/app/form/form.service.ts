import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Form} from "../model/form.model";
import {api} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class FormService {

  constructor(private http: HttpClient) {
  }

  private formUrl = api.form;

  public addForm(form: Form) {
    return this.http.post<Form>(this.formUrl, form);
  }

  public getForms() {
    return this.http.get<Form[]>(this.formUrl);
  }

  public updateForm(form: Form) {
    return this.http.put<Form>(this.formUrl, form);
  }
}

