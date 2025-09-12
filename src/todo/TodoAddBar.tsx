import { useState } from "react";
import { Todo } from "../types/todo";
import { Dispatch, SetStateAction, FormEvent } from "react";
interface TodoBar {
  textVal: string;
}
interface StateProps {
  setTodoState: (value: Todo[] | ((prev: Todo[]) => Todo[])) => void;
}
function TodoAddBar({ setTodoState }: StateProps) {
  const todoBar: TodoBar = {
    textVal: "",
  };
  const [addTodoBar, setTodoBar] = useState<TodoBar>(todoBar);
  const handleUpdateTodoBar = (newText: string) => {
    setTodoBar((prev) => {
      return { ...prev, textVal: newText };
    });
  };

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    setTodoState((prev) => {
      const nextId = prev[prev.length - 1].id + 1;
      return [
        ...prev,
        {
          id: nextId,
          text: addTodoBar.textVal,
          finished: false,
        },
      ];
    });
    handleUpdateTodoBar("");
  };
  return (
    <form
      onSubmit={(e) => {
        handleAddTodo(e);
      }}
    >
      <input
        type="text"
        placeholder="Add your todo"
        value={addTodoBar.textVal}
        onChange={(e) => {
          handleUpdateTodoBar(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default TodoAddBar;
