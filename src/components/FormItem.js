import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function FormList({ form, deleteForm, onSelect }) {
  return (
    <Container style={{ marginTop: 20 }} onClick={()=>onSelect(form)}>
      <ListGroup.Item action href={`#item_${form._id}`}>
        <Badge variant="info">{form.createdAt}</Badge>
        <h1>
          {form.title}
          <div style={{ float: "right" }}>
            <Button onClick={()=>deleteForm(form._id)} variant="danger">delete</Button>
          </div>
        </h1>
      </ListGroup.Item>
    </Container>
  );
}

export default FormList;
