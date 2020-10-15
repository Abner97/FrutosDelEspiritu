import { QuestionModel } from "../../models/question_model";
import React from "react";
export interface questionInterface {
  questions: Array<QuestionModel>;
  actualIndex: number;
}

export interface providerValueInterface {
  questions: Array<QuestionModel>;
  getQuestions: Function;
  increaseIndex: Function;
  actualIndex: number;
  resetStateQuestions: Function;
}

export interface actionInterface {
  type: string;
  payload: Array<QuestionModel>;
  actualIndexPayload: number;
}

export interface propsInterface {
  children: React.ReactNode;
}
