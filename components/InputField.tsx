import * as React from 'react';
interface TodoProps {
  Todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSetTodos: (e: React.FormEvent) => void;
}
const InputField = ({ Todo, setTodo, handleSetTodos }: TodoProps) => {
  return (
    <form className="InputField">
      <input
        type="text"
        value={Todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter A Task"
        className="InputFieldBox"
      />
      <button
        className="InputFieldSubmitBtn"
        type="submit"
        onClick={handleSetTodos}
      >
        Go
      </button>
    </form>
  );
};
export default InputField;
