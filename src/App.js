import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import FormList from "./components/FormList";
import NewForm from "./components/NewForm";
import FormBuilder from "./components/FormBuilder";

const BASE_URL = 'https://hsol-server.herokuapp.com'

function App() {
  const [forms, setForms] = useState([]);
  const [toFetch, setToFetch] = useState(true);
  const [selectedForm, setSelectedForm] = useState(null);
  const handleSelectForm = form => {
    if(selectedForm && selectedForm._id === form._id) return setSelectedForm(null)
    setSelectedForm(form)
  }

  const addNewForm = async (title) => {
    await axios.post(`${BASE_URL}/api/forms`, {
      title,
    });
    setToFetch(true);
  };

  const deleteForm = async (formId) => {
    await axios.delete(`${BASE_URL}/api/forms/${formId}`);
    setSelectedForm(null)
    setToFetch(true);
  };

  const addNewQuestion = async (question) => {
    const {data: updatedForm} = await axios.post(`${BASE_URL}/api/forms/${selectedForm._id}/questions`, {
      question,
    });
    setSelectedForm(updatedForm)
    setToFetch(true)
  };

  const deleteQuestion = async question => {
    const { data: updatedForm } = await axios.delete(
      `${BASE_URL}/api/forms/${selectedForm._id}/questions/${question}`
    );
    setSelectedForm(updatedForm)
    setToFetch(true)
  }

  useEffect(() => {
    if (!toFetch) return;
    (async () => {
      const { data: forms } = await axios.get(
        `${BASE_URL}/api/forms`
      );
      setForms(forms);
      setToFetch(false);
    })();
  }, [toFetch]);

  return (
    <Container>
      <NewForm addNewForm={addNewForm} />
      <FormList forms={forms} deleteForm={deleteForm} setSelectedForm={handleSelectForm} />
      {selectedForm && <FormBuilder form={selectedForm} addNewQuestion={addNewQuestion} deleteQuestion={deleteQuestion} />}
    </Container>
  );
}

export default App;
