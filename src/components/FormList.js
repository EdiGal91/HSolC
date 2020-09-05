import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import FormItem from "./FormItem";

function FormList({forms, deleteForm, setSelectedForm}) {

  return (
    <Container>
      <ListGroup>
        {forms.map((form) => (
          <FormItem onSelect={setSelectedForm} key={form._id} form={form} deleteForm={deleteForm} />
        ))}
      </ListGroup>
    </Container>
  );
}

export default FormList;
