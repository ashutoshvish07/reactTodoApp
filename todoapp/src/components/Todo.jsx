import React from "react";

import { useState } from "react";

import Todoitem from "./Todoitem";
const Todo = () => {
  let [value, setValue] = useState("");
  let [todos, setTodos] = useState([]);

  const onDelete = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div id="maindiv">
      <h1>Todo List Using React</h1>
      <input
        id="input1"
        placeholder="Enter the value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        id="btn"
        onClick={() => {
          setTodos([...todos, { id: Date.now(), value: value }]);
          setValue("");
        }}
      >
        +
      </button>

      <div>
        {todos.map((todo, index) => (
          <Todoitem
            color={index !== 0 ? "rgb(135,255,197)" : "rgb(127,123,255)"}
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
