import React, { useState } from "react";
import shortid from "shortid";
const ToDoForm = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(text);
    onSubmit({
      id: shortid.generate(),
      text: text,
      complete: false,
    });
    if (text === "") {
      setText("none");
    }
    setText("");
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        value={text}
        type="text"
        className="inputFiled"
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn" onClick={handelSubmit}>
        Add ToDo
      </button>
    </form>
  );
};

export default ToDoForm;
