import { QuestionModel } from "../../models/question_model";
import React from "react";
export interface questionInterface {
  questions: Array<QuestionModel>;
}

export interface providerValueInterface {
  questions: Array<QuestionModel>;
  getQuestions: Function;
}

export interface actionInterface {
  type: string;
  payload: Array<QuestionModel>;
}

export interface propsInterface {
  children: React.ReactNode;
}
