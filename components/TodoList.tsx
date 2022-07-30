import * as React from 'react';
import { useState } from 'react';
import { Todo } from '../model';
import EachTodo from './EachTodo';
interface TodoListProps {
  Todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ Todos, setTodos }: TodoListProps) => {
  return (
    <div className="Todos">
      {Todos.map(({ id, Todo, isDone }) => (
        <EachTodo
          Todos={Todos}
          setTodos={setTodos}
          id={id}
          Todo={Todo}
          isDone={isDone}
        />
      ))}
    </div>
  );
};
export default TodoList;
