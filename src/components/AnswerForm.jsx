import {Form, Button, Container} from "react-bootstrap";
import {useState} from "react";

function AnswerForm(props) {
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('AnswerForm.handleSubmit: text=' + text + ', name=' + name + ', date=' + date + '.)');
        //props.addAnswer(text, name, date);
        setText('');
        setName('');
        setDate('');
    }

    return (

        <Form className="mx-auto" striped  onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Text</Form.Label>
                <Form.Control
                    type="text"
                    minLength={2}
                    maxLength={50}
                    rows={3}
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    required={true}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    type="text"
                    minLength={6}
                    maxLength={20}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required={true}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                    type="date"
                    value={date} required={true}
                    onChange={(event) => setDate(event.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add
            </Button>
            &nbsp;
            <Button variant="danger" type="reset">
                Cancel
            </Button>
        </Form>
    );
}

export {AnswerForm};