import {Question} from "./question.model";

export class Form {
  id: any;
  title: string;
  creator: string;
  created_at: Date;
  questions: Question[];
}
