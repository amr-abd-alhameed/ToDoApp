import { useState } from "react";
import "./App.css";
import ToDo from "./Components/ToDo";
import ToDoForm from "./Components/ToDoForm";

function App() {
  let [toDos, setToDos] = useState([]);
  const [show, setShow] = useState("all");
  const [toggleAllComplete, setToggleAllComplete] = useState(true);
  const addToDo = (todo) => {
    setToDos([todo, ...toDos]);
  };
  const handleDelete = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };
  const updateDatat = (e) => {
    setShow(e);
  };
  const toggleComplete = (id) => {
    setToDos(
      toDos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      })
    );
  };
  const removeAllToDos = () => {
    setToDos(toDos.filter((todo) => !todo.complete));
  };
  if (show === "active") {
    toDos = toDos.filter((todo) => !todo.complete);
  } else if (show === "complete") {
    toDos = toDos.filter((todo) => todo.complete);
  }
  return (
    <div className="container">
      <ToDoForm onSubmit={addToDo} />
      {toDos.map((todo) => (
        <ToDo
          key={todo.id}
          todo={todo}
          onDelete={() => handleDelete(todo.id)}
          toggleComplete={() => toggleComplete(todo.id)}
        />
      ))}
      <div>
        <button className="update-btn btn" onClick={() => updateDatat("all")}>
          All
        </button>
        <button
          className="update-btn btn"
          onClick={() => updateDatat("active")}
        >
          Active
        </button>
        <button
          className="update-btn btn"
          onClick={() => updateDatat("complete")}
        >
          Complete
        </button>
      </div>
      {toDos.some((todo) => todo.complete) ? (
        <button className="all-btn btn" onClick={removeAllToDos}>
          Remove All Complete ToDos
        </button>
      ) : null}
      <button
        className="all-btn btn"
        onClick={() => {
          setToDos(
            toDos.map((todo) => ({
              ...todo,
              complete: toggleAllComplete,
            }))
          );
          setToggleAllComplete(!toggleAllComplete);
        }}
      >
        All ToDos {`${toggleAllComplete}`}
      </button>
    </div>
  );
}

export default App;
