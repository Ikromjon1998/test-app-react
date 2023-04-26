import 'bootstrap/dist/css/bootstrap.min.css';
import { Answer, Question } from './QAModels';
import { Container} from 'react-bootstrap';
import { Answers } from './components/AnswerComponents';
import { AnswerForm } from "./components/AnswerForm.jsx";
import NavHeader from './components/NavbarComponents';
import QuestionDescription from './components/QuestionComponents';
import './App.css';
import {useState} from "react";

const fakeQuestion = new Question(1, 'Is JavaScript better than Python?', 'Luigi De Russis', '2023-02-07');
const fakeAnswers = [new Answer(1, 'Yes', 'Luca Mannella', '2023-02-15', -10),
    new Answer(2, 'Not in a million year', 'Guido van Rossum', '2023-03-02', 5),
    new Answer(3, 'No', 'Luigi De Russis', '2023-03-02', 10),
    new Answer(4, 'Both have their pros and cons', 'Mario Rossi', '2023-03-04')];

function App() {
    const [question, setQuestion] = useState(fakeQuestion);
    const [answers, setAnswers] = useState(fakeAnswers);

    const voteUp = (answerId) => {
        setAnswers(
            answers.map((ans) => {
                if (ans.id === answerId) {
                    console.log(ans);
                    ans.score++;
                    console.log(ans);
                }
                return ans;
            }
        ));
    }

    return (
        <div className="App">
            <NavHeader questionNum={question.id} />
            <Container fluid className="mt-3">
                <QuestionDescription question={question} />
                <Answers answers={answers} voteUp={voteUp}></Answers>
                <AnswerForm />
            </Container>
        </div>

    )
}

export default App;