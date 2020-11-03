import {QuestionType} from "./question-type.model";
import {Answer} from "./answer.model";

export class Question {
  id: number;
  text: string;
  type: QuestionType;
  answers: Answer[];
}
