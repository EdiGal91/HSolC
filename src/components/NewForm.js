import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function NewForm({ addNewForm }) {
  const [title, setTitle] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    addNewForm(title);
    setTitle("");
  };
  return (
    <Container style={{ marginTop: 20 }}>
      <Form onSubmit={onSubmit}>
        <Form.Row>
          <Col>
            <Form.Control
              onChange={event=>setTitle(event.target.value)}
              value={title}
              placeholder="Enter title"
            />
          </Col>
          <Col>
            <Button variant="success" type="submit">
              Submit new form
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  );
}

export default NewForm;
