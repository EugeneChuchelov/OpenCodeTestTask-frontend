import {Component, OnInit} from '@angular/core';
import {Question} from "../../model/question.model";
import {QuestionType} from "../../model/question-type.model";
import {Answer} from "../../model/answer.model";
import {Form} from "../../model/form.model";
import {UserStorage} from "../../user/user.storage";
import {UserService} from "../../user/user.service";
import {FormService} from "../form.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-constructor',
  templateUrl: './form-constructor.component.html',
  styleUrls: ['./form-constructor.component.css']
})
export class FormConstructorComponent implements OnInit {

  keys = Object.keys;
  types = QuestionType;
  form: Form;
  isUpdate = true;

  constructor(private userStorage: UserStorage, private userService: UserService,
              private formService: FormService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = window.history.state.form;
    if (this.form == undefined) {
      this.form = new Form();
      this.isUpdate = false;
      this.form.questions = [];
    }
  }

  addQuestion() {
    const question = new Question();
    question.answers = [];
    this.addAnswer(question);
    this.form.questions.push(question);
  }

  addAnswer(question: Question) {
    question.answers.push(new Answer());
  }

  removeQuestion(question: Question) {
    const id = this.form.questions.indexOf(question);
    this.form.questions.splice(id, 1);
  }

  removeAnswer(question: Question, answer: Answer) {
    const qId = this.form.questions.indexOf(question);
    const aId = this.form.questions[qId].answers.indexOf(answer);
    this.form.questions[qId].answers.splice(aId, 1);
  }

  submit() {
    const username = this.userStorage.getUsername();
    this.form.creator = username;
    this.formService.addForm(this.form).subscribe(newForm => {
      this.userService.getOne(username).subscribe(user => {
        user.forms.push(newForm.id);
        this.userService.updateUser(user).subscribe();
      });
      this.router.navigate(['form-list']);
    });
  }

  update() {
    this.formService.updateForm(this.form).subscribe(data =>
      this.router.navigate(['form-list'])
    );
  }
}
