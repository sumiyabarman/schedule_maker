import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList({ selectedDate }) {
  const todos = useSelector((state) => state.todos.todos);

  const filteredTodos = todos.filter(
    (todo) => todo.date === selectedDate
  );

  if (!selectedDate) {
    return <p className="text-center w-full">Select a date first</p>;
  }

  if (filteredTodos.length === 0) {
    return <p className="text-center w-full">No todos for this date</p>;
  }

  return (
    <>
      {filteredTodos.map((todo) => (
        <div key={todo.id} className="w-full">
          <TodoItem todo={todo} />
        </div>
      ))}
    </>
  );
}

export default TodoList;