import React from "react";
import { useTodosQuery } from "../features/ToDoList";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const { data: todos } = useTodosQuery();

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos?.map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
