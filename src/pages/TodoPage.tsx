import React from "react";
import { useState, useCallback } from "react";
import TodoList from "../todo/TodoList";
import TodoAddBar from "../todo/TodoAddBar";
import { Todo } from "../types/todo";
import { initialTodos } from "../data/initialTodos";

function TodoPage() {
  const [todoState, setTodoState] = useState<Todo[]>(initialTodos);
  const [showError, setShowError] = useState<string>("");

  const handleFinishTodo = useCallback(
    (id: number): void => {
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
    },
    [todoState]
  );
  return (
    <div>
      {showError === "" ? <p>{showError}</p> : null}

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

export default TodoPage;
