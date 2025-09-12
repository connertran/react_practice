import { Todo } from "../types/todo";

interface StateProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  setTodoState: (value: Todo[] | ((prev: Todo[]) => Todo[])) => void;
  displayError: (value: string) => void;
}
function TodoList({
  todos,
  toggleTodo,
  setTodoState,
  displayError,
}: StateProps) {
  const handleDeleteTodo = (id: number) => {
    setTodoState((prev) => {
      const todoArray = [...prev];
      let arrayIndex = -1;
      for (let i = 0; i < todoArray.length; i++) {
        if (todoArray[i].id === id) {
          arrayIndex = i;
        }
      }
      //meaning we didn't find the correct todo in the DB
      if (arrayIndex === -1) {
        displayError("Cannot find the todo. Refresh the page and try again.");
        return prev;
      }
      todoArray.splice(arrayIndex, 1);
      return todoArray;
    });
  };
  const todoArr = todos.map((eachTodo: Todo) => {
    const eachTodoId = eachTodo.id;
    return (
      <li key={eachTodo.id}>
        <label>{eachTodo.text}</label>
        <input
          type="checkbox"
          checked={eachTodo.finished}
          onChange={() => {
            toggleTodo(eachTodoId);
          }}
        />
        <button
          onClick={() => {
            handleDeleteTodo(eachTodoId);
          }}
        >
          X
        </button>
      </li>
    );
  });

  return <>{todoArr}</>;
}

export default TodoList;
