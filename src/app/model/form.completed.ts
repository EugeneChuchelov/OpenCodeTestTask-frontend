import {QuestionCompleted} from "./question-completed.model";

export class FormCompleted {
  id: number;
  title: string;
  creator: string;
  completer: string;
  created_at: Date;
  completed_at: Date;
  questions: QuestionCompleted[];
}
