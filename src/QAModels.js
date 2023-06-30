"use strict";

import dayjs from "dayjs";

// Define the Answer class
function Answer(id, text, name, date, questionId, score = 0) {
  this.id = id;
  this.text = text;
  this.name = name;
  this.score = score;
  this.questionId = questionId;
  this.date = dayjs(date);

  // Method to enable the proper serialization to string of the dayjs object.
  // Needed for the useLocation hook of react router when passing the answer to the edit form (AnswerComponent and AnswerForm).
  this.serialize = () => {
    return {
      id: this.id,
      text: this.text,
      name: this.name,
      date: this.date.format("YYYY-MM-DD"),
      questionId: this.questionId,
      score: this.score,
    };
  };
}

// Define the Question class
function Question(id, text, author, date) {
  this.id = id;
  this.text = text;
  this.author = author;
  this.date = dayjs(date);
  this.answers = [];

  // Method to add an answer to the question
  this.addAnswer = (answer) => {
    this.answers.push(answer);
  };

  // Method to get all answers for the question
  this.getAnswers = () => {
    return [...this.answers];
  };

  // Method to initialize the question with some sample answers
  this.init = () => {
    this.answers.push(
      new Answer(1, "Yes", "Luca Mannella", "2023-02-15", -10),
      new Answer(
        2,
        "Not in a million years",
        "Guido van Rossum",
        "2023-03-02",
        5
      ),
      new Answer(3, "No", "Luigi De Russis", "2023-03-02", 10),
      new Answer(
        4,
        "Both have their pros and cons",
        "Mario Rossi",
        "2023-03-04"
      )
    );
  };
}

// Export the Question and Answer classes
export { Question, Answer };
