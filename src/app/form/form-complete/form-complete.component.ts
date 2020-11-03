import {Component, OnInit} from '@angular/core';
import {QuestionCompleted} from "../../model/question-completed.model";
import {Form} from "../../model/form.model";
import {FormService} from "../form.service";
import {AnswerCompleted} from "../../model/answer-completed.model";
import {QuestionType} from "../../model/question-type.model";
import {FormCompleted} from "../../model/form.completed";
import {UserStorage} from "../../user/user.storage";
import {Router} from "@angular/router";
import {FormCompletedService} from "../form-completed.service";

@Component({
  selector: 'app-form-complete',
  templateUrl: './form-complete.component.html',
  styleUrls: ['./form-complete.component.css']
})
export class FormCompleteComponent implements OnInit {

  form: Form;
  questions: QuestionCompleted[];
  questionType = QuestionType;

  constructor(private formService: FormService, private formCompletedService: FormCompletedService,
              private storage: UserStorage, private router: Router) {
  }

  ngOnInit(): void {
    this.questions = [];
    this.form = window.history.state.form;
    if (this.form != undefined) {
      this.form.questions.forEach(q => {
        const question = new QuestionCompleted();
        question.text = q.text;
        question.type = q.type;
        question.answers = [];

        q.answers.forEach(a => {
          const answer = new AnswerCompleted();
          answer.text = a.text;
          answer.checked = false;
          question.answers.push(answer);
        });

        this.questions.push(question);
      });
    }
  }

  submit() {
    const formCompleted = new FormCompleted()
    formCompleted.title = this.form.title;
    formCompleted.creator = this.form.creator;
    formCompleted.created_at = this.form.created_at;
    formCompleted.completer = this.storage.getUsername();
    this.questions.forEach(q => {
      if (q.chosen != undefined)
        q.answers[q.chosen].checked = true;
    });
    formCompleted.questions = this.questions;
    this.formCompletedService.addForm(formCompleted).subscribe(d =>
      this.router.navigate(['form-list'])
    );
  }
}
