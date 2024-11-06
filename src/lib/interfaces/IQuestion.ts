import { ScreenType } from "../types";
import IQuestionOption from "./IQuestionOption";
import INextQuestionCondition from "./INextQuestionCondition";
import IQuestionContentCondition from "./IQuestionContentCondition";

export default interface IQuestion {
  id: string;
  content: string | IQuestionContentCondition[];
  subcontent?: string;
  screenType: ScreenType;
  next?: string | INextQuestionCondition;
  options?: IQuestionOption[];
  dependentQuestionIds?: string[];
}
