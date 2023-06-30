import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function QuestionList(props) {
  return (
    <>
      <Row>
        <Col>
          <h1>Welcome to HeapOverrun!</h1>
          {/* Display the number of available questions */}
          <p className="lead">
            We now have {props.questions.length} questions available.
          </p>
        </Col>
      </Row>
      <Row>
        <dl>
          {/* Render each question as a QuestionRow component */}
          {props.questions.map((q) => (
            <QuestionRow question={q} key={q.id} />
          ))}
        </dl>
      </Row>
    </>
  );
}

function QuestionRow(props) {
  return (
    <>
      {/* Display the question ID and text, linked to the question's details page */}
      <dt>
        Question #{props.question.id}:{" "}
        <Link to={`/questions/${props.question.id}`}>
          {props.question.text}
        </Link>
      </dt>
      {/* Display the question author and date */}
      <dd>
        Asked by {props.question.author} on{" "}
        {props.question.date.format("YYYY-MM-DD")}
      </dd>
    </>
  );
}
