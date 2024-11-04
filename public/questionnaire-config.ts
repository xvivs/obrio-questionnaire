const config = {
  questions: [
    {
      id: "1",
      text: "What is your favorite color?",
      screenType: "single-select",
      options: [
        { id: "1", text: "Red", nextQuestionId: "2" },
        { id: "2", text: "Blue", nextQuestionId: "3" },
        { id: "3", text: "Green", nextQuestionId: "4" },
        { id: "4", text: "Yellow", nextQuestionId: "5" }, 
      ],
    }
  ]
};

export default config