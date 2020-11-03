import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {FormCompleted} from "../../model/form.completed";
import {FormCompletedService} from "../../form/form-completed.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-completed-forms',
  templateUrl: './user-completed-forms.component.html',
  styleUrls: ['./user-completed-forms.component.css']
})
export class UserCompletedFormsComponent implements OnInit {

  user: User;
  forms: FormCompleted[];

  constructor(private formService: FormCompletedService, private router: Router) {
  }

  ngOnInit(): void {
    this.user = window.history.state.user;
    this.formService.getForms(this.user.username).subscribe(data => this.forms = data);
  }

  seeAnswers(form: FormCompleted) {
    this.router.navigate(['completed-form'], {state: {form: form, user: this.user}});
  }
}
