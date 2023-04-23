import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import './App.css'
import Question from './QAModels'
import { Answers } from './components/AnswerComponents.jsx'

const fakeData = new Question(
  1, 
  'Is JavaScript a programming language?', 
  'Ikromjon Ochilov ', 
  '2023-04-21'
);
fakeData.init();

function App() {

  return (
    <div className="App">
      <Container>
        <Answers answers={fakeData.getAnswers()} />
      </Container>
    </div>
  )
}

export default App
