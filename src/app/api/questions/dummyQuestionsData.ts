import IQuestion from "@/lib/interfaces/IQuestion";

export const dummyQuestionsData: IQuestion[] = [
  {
    id: "1",
    text: "What is your favorite color?",
    screenType: "single-select",
    options: [
      { id: "1", text: "Red", nextQuestionId: "2" },
      { id: "2", text: "Blue", nextQuestionId: "2" },
      { id: "3", text: "Green", nextQuestionId: "2" },
      { id: "4", text: "Yellow", nextQuestionId: "2" }, 
    ],
  },
  {
    id: "2",
    text: "What is your favorite animal?",
    screenType: "single-select",
    options: [
      { id: "1", text: "Dog", nextQuestionId: "3" },
      { id: "2", text: "Cat", nextQuestionId: "3" },
      { id: "3", text: "Elephant", nextQuestionId: "3" },
      { id: "4", text: "Monkey", nextQuestionId: "3" }, 
    ],
  },
  {
    id: "3",
    text: "What is your favorite food?",
    screenType: "single-select",
    options: [
      { id: "1", text: "Pizza", nextQuestionId: "4" },
      { id: "2", text: "Burger", nextQuestionId: "4" },
      { id: "3", text: "Salad", nextQuestionId: "4" },
      { id: "4", text: "Sushi", nextQuestionId: "4" }, 
    ],
  },
  {
    id: "4",
    text: "What is your favorite movie?",
    screenType: "single-select",
    options: [
      { id: "1", text: "Harry Potter", nextQuestionId: "5" },
      { id: "2", text: "Lord of the Rings", nextQuestionId: "5" },
      { id: "3", text: "Star Wars", nextQuestionId: "5" },
      { id: "4", text: "Harry Potter", nextQuestionId: "5" }, 
    ],
  },
  {
    id: "5",
    text: "What is your favorite sport?",
    screenType: "single-select",
    options: [
      { id: "1", text: "Football", nextQuestionId: null },
      { id: "2", text: "Basketball", nextQuestionId: null },
      { id: "3", text: "Volleyball", nextQuestionId: null },
      { id: "4", text: "Soccer", nextQuestionId: null }, 
    ],
  }
];