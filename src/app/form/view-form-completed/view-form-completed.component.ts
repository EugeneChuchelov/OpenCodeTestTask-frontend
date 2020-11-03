import {Component, OnInit} from '@angular/core';
import {FormCompleted} from "../../model/form.completed";
import {QuestionType} from "../../model/question-type.model";
import {Router} from "@angular/router";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-view-form-completed',
  templateUrl: './view-form-completed.component.html',
  styleUrls: ['./view-form-completed.component.css']
})
export class ViewFormCompletedComponent implements OnInit {

  form: FormCompleted;
  user: User;
  questionType = QuestionType;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.form = window.history.state.form;
    this.user = window.history.state.user
  }

  back() {
    this.router.navigate(['user-completed-forms'], {state: {user: this.user}})
  }
}
