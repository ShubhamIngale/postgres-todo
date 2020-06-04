import React, { Fragment, useState } from "react";
import axios from 'axios';

function InputTodo() {
  const [description, setDescription] = useState("");

  const onSubmitForm = (e) => {
      e.preventDefault();
          axios.post('http://localhost:5000/todos', {
              description
          })
          .then((response) => window.location = '/')
          .catch(err => console.error(err.message))
  }

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="mt-5 d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="submit btn btn-success">Add</button>
      </form>
    </Fragment>
  );
}

export default InputTodo;
