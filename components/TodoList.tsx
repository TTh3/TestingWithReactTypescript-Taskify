import * as React from 'react';
import { Todo } from '../model';
import Pencil from '../AppIcons';
interface TodoListProps {
  Todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ Todos, setTodos }: TodoListProps) => {
  return (
    <div className="Todos">
      {Todos.map(({ id, Todo, isDone }) => (
        <div className="EachTodo">
          <li key={id + Todo}>{Todo}</li>
          <div className="TodoActions">
            <Pencil />
          </div>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
