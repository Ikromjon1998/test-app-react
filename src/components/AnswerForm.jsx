import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Answer } from "../QAModels";
import dayjs from "dayjs";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";

function AnswerForm(props) {
  // Retrieve the questionId from the URL parameters
  let { questionId } = useParams();

  // Get the navigate function from react-router-dom
  const navigate = useNavigate();

  // Get the current location object from react-router-dom
  const location = useLocation();

  // Check if the form is for editing an existing answer or adding a new answer
  const editableAnswer = location.state;

  // Define state variables for the form inputs
  const [id, setId] = useState(
    editableAnswer ? editableAnswer.id : props.lastId + 1
  );
  const [text, setText] = useState(editableAnswer ? editableAnswer.text : "");
  const [name, setName] = useState(editableAnswer ? editableAnswer.name : "");
  const [date, setDate] = useState(
    editableAnswer
      ? dayjs(editableAnswer.date).format("YYYY-MM-DD")
      : dayjs().format("YYYY-MM-DD")
  );
  const [score, setScore] = useState(editableAnswer ? editableAnswer.score : 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // create a new answer
    const answer = new Answer(id, text, name, date, questionId, score);
    // TODO: add validations!
    if (editableAnswer) {
      props.updateAnswer(answer);
      // navigate('../..', {relative: 'path'});
    } else {
      // add the answer to the "answers" state
      props.addAnswer(answer);
      // navigate('..', {relative: 'path'});
    }
    // instead of the two "navigate" above, you can use:
    navigate(`/questions/${questionId}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Text</Form.Label>
        {/* Input field for the answer text */}
        <Form.Control
          type="text"
          minLength={2}
          required={true}
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        {/* Input field for the answer author name */}
        <Form.Control
          type="text"
          required={true}
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        {/* Input field for the answer date */}
        <Form.Control
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        ></Form.Control>
      </Form.Group>
      {/* Render the submit button and cancel button based on whether it's an edit or add form */}
      {editableAnswer ? (
        <>
          <Button variant="primary" type="submit">
            Update
          </Button>
          <Link to="../.." relative="path" className="btn btn-danger">
            Cancel
          </Link>
        </>
      ) : (
        <>
          <Button variant="primary" type="submit">
            Add
          </Button>
          <Link to=".." relative="path" className="btn btn-danger">
            Cancel
          </Link>
        </>
      )}
    </Form>
  );
}

export default AnswerForm;
