import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Question, Answer } from "./QAModels";
import SingleQuestion from "./components/SingleQuestionComponent";
import NavHeader from "./components/NavbarComponents";
import NotFound from "./components/NotFoundComponent";
import AnswerForm from "./components/AnswerForm";
import QuestionList from "./components/QuestionListComponent";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Create some fake questions
const fakeQuestions = [
  new Question(
    1,
    "Is JavaScript better than Python?",
    "Luigi De Russis",
    "2023-02-07"
  ),
  new Question(
    2,
    "How many students does WA1 have?",
    "Luca Mannella",
    "2023-02-15"
  ),
];

// Create some fake answers
const fakeAnswers = [
  new Answer(1, "Yes", "Luca Mannella", "2023-02-15", 1, -10),
  new Answer(
    2,
    "Not in a million years",
    "Guido van Rossum",
    "2023-03-02",
    1,
    5
  ),
  new Answer(3, "No", "Luigi De Russis", "2023-03-02", 1, 10),
  new Answer(
    4,
    "Both have their pros and cons",
    "Mario Rossi",
    "2023-03-04",
    1
  ),
  new Answer(5, "85", "Ikromjon Ochilov", "2023-04-01", 2, 34),
];

function App() {
  const [questions, setQuestions] = useState(fakeQuestions);
  const [answers, setAnswers] = useState(fakeAnswers);

  // Function to handle voting up an answer
  const voteUp = (answerId) => {
    setAnswers((oldAnswers) => {
      return oldAnswers.map((ans) => {
        if (ans.id === answerId) {
          // Return the "updated" answer with score incremented by 1
          return new Answer(
            ans.id,
            ans.text,
            ans.name,
            ans.date,
            ans.questionId,
            ans.score + 1
          );
        } else return ans;
      });
    });
  };

  // Function to add a new answer
  const addAnswer = (answer) => {
    setAnswers((oldAnswers) => [...oldAnswers, answer]);
  };

  // Function to update an existing answer
  const updateAnswer = (answer) => {
    setAnswers((oldAnswers) => {
      return oldAnswers.map((ans) => {
        if (ans.id === answer.id) {
          // Return the updated answer with the new information
          return new Answer(
            answer.id,
            answer.text,
            answer.name,
            answer.date,
            ans.questionId,
            answer.score
          );
        } else return ans;
      });
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        {/*
          - / (index) -> all the questions
          - /questions/:questionId -> the page with the :questionId question info and its answers
          - /questions/:questionId/addAnswer -> the form to add a new answer
          - /questions/:questionId/editAnswer/:answerId -> the form to update the :answerId answer
          - * -> not found
        */}
        <Route
          element={
            <>
              <NavHeader questions={questions} />
              <Container fluid className="mt-3">
                <Outlet />
              </Container>
            </>
          }
        >
          <Route index element={<QuestionList questions={questions} />} />
          <Route
            path="questions/:questionId"
            element={
              <SingleQuestion
                questions={questions}
                answers={answers}
                voteUp={voteUp}
              />
            }
          />
          <Route
            path="questions/:questionId/addAnswer"
            element={
              <AnswerForm
                addAnswer={addAnswer}
                lastId={Math.max(...answers.map((ans) => ans.id))}
              />
            }
          />
          <Route
            path="questions/:questionId/editAnswer/:answerId"
            element={<AnswerForm updateAnswer={updateAnswer} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
