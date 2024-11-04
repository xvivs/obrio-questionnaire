import { ScreenType } from "../types";
import IQuestionOption from "./IQuestionOption";

export default interface IQuestion {
  id: string;
  text: string;
  screenType: ScreenType;
  options: IQuestionOption[];
}