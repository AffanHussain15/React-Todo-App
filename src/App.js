// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import TodoList from './component/TodoList';
import AddTodo from './component/AddTodo';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const newTodo = { id: uuidv4(), task: task };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}
      <div>
       <h1>Todo List App</h1>
       <AddTodo addTodo={addTodo} />
     <TodoList todos={todos} deleteTodo={deleteTodo} />
          </div>
    </div>
  );
}

export default App