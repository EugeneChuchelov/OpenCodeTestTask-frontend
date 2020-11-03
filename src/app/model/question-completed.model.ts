import {QuestionType} from "./question-type.model";
import {AnswerCompleted} from "./answer-completed.model";

export class QuestionCompleted {
  id: number;
  text: string;
  type: QuestionType;
  answers: AnswerCompleted[];
  chosen: number;
}
