import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function FormBuilder({ form, addNewQuestion, deleteQuestion }) {
  const [question, setQuestion] = useState("");
  const handleNewQuestion = (event) => {
    addNewQuestion(question);
    setQuestion("");
  };


  return (
    <Container>
      <h3>
        {form.title}
        <Badge style={{ float: "right" }} variant="secondary">
          {form._id}
        </Badge>
      </h3>

      <InputGroup className="mb-3">
        <FormControl
          onChange={(event) => setQuestion(event.target.value)}
          value={question}
          placeholder="Your question here..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button
            onClick={handleNewQuestion}
            variant="success"
            id="basic-addon2"
          >
            Add
          </Button>
        </InputGroup.Append>
      </InputGroup>

      <ListGroup>
        {form.questions.map((question, index) => (
          <ListGroup.Item key={`${index}_${question}`}>
            {question}
            <Button onClick={()=>deleteQuestion(question)} variant="danger" style={{ float: "right" }}>
              X
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
export default FormBuilder;
