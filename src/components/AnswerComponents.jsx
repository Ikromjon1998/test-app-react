import {Row, Col, Table, Button} from "react-bootstrap";

function Answers(props) {
    console.log(props.answers);
    return (
        <div>
            <Row>
                <Col as="h2">
                    Answers:
                </Col>
            </Row>
            <Row>
                <AnswrTable answers={props.answers}>

                </AnswrTable>
            </Row>
        </div>
    );
}

function AnswrTable(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Text</th>
                    <th>Author</th>
                    <th>Score</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {props.answers.map((ans) =>
                <AnswerRow answer={ans} key={ans.id} >
                </AnswerRow>)
            }
            </tbody>
        </Table>

    );
}

function AnswerRow(props) {
    return (
        <tr>
            <td>{props.answer.date.format('YYYY-MM-DD')}</td>
            <td>{props.answer.text}</td>
            <td>{props.answer.name}</td>
            <td>{props.answer.score}</td>
            <td>
                <Button variant="primary">Upvote</Button>
            </td>
        </tr>
    );
}

export { Answers };