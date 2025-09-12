import React from "react";
import { useState } from "react";
import "./App.css";
import { toUnicode } from "punycode";
import TodoList from "./todo/TodoList";
import TodoAddBar from "./todo/TodoAddBar";
import { Todo } from "./types/todo";
import { initialTodos } from "./data/initialTodos";

function App() {
  const [todoState, setTodoState] = useState<Todo[]>(initialTodos);
  const [showError, setShowError] = useState<string>("");

  function handleFinishTodo(id: number): void {
    // find the todo in the array
    let index = -1;
    for (let i = 0; i < todoState.length; i++) {
      if (todoState[i].id === id) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      setShowError("Cannot find the todo. Refresh the page and try again.");
      return;
    }

    //change the boolean
    setTodoState((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], finished: !next[index].finished };
      return next;
    });
  }
  return (
    <div>
      {showError === "" ? <p>{showError}</p> : <p></p>}

      <h1>Todo List</h1>
      <TodoAddBar setTodoState={setTodoState} />
      <ul className="todo-list">
        <TodoList
          setTodoState={setTodoState}
          todos={todoState}
          toggleTodo={handleFinishTodo}
          displayError={setShowError}
        />
      </ul>
    </div>
  );
}

export default App;
