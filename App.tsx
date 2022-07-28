import * as React from 'react';
import { useState } from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';
import './style.css';

const App: React.FC = () => {
  const [Todo, setTodo] = useState<string>('');
  const [Todos, setTodos] = useState<Todo[]>([]);
  const handleSetTodos = (e: React.FormEvent) => {
    e.preventDefault();
    if (Todo) {
      setTodos([...Todos, { id: Date.now(), Todo, isDone: false }]);
      setTodo("")
    }
  };
  console.log(Todos)
  return (
    <div className="App">
      <h1 className="heading">Taskify</h1>
      <InputField
        Todo={Todo}
        setTodo={setTodo}
        handleSetTodos={handleSetTodos}
      />
      <TodoList Todos={Todos} setTodos={setTodos}/>
    </div>
  );
};
export default App;
