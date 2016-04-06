var question = {
  prompt: "A, B, or C?",
  options: ["A", "B", "C"],
  answer: 1, // e.g. item index 1 in options array
  check: function(answer) {
    return answer === this.answer;
  }
}

var game = {
  questions: [
    Object.create(question, {
      prompt: "Moo or Oink?",
      options: ["Moo", "Oink"],
      answer: 0
    }),
    Object.create(question, {
      prompt: "Pink or Cheese?",
      options: ["Pink", "Cheese"],
      answer: 0
    })
  ],
  nextQuestion: function(inputAnswer) {
    if (this.questions[currentQuestion].check(inputAnswer)) {
      // correct answer
    } else {
      // wrong answer
    }
  },
  previousQuestion: function() {},

}