import './App.css';
import {useState} from 'react';
import Todolist from './TodoList';


function App() {
  const [todos, setTodos] = useState("")
  
  return (
    <div className="App">
      <Todolist todos={todos} />
    </div>
  );
}

export default App;
