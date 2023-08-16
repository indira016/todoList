
import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos,setTodos]=useState([])

const addTodo=(title,date)=>{
setTodos([...todos,{title,date,complaoted:false,id:Math.random().toString()}])
}

  return (
    <div className="App">
      <AddTodo onAdd={addTodo}/>
    <TodoList  todos={todos} setTodos={setTodos}  />
    </div>
  );
}

export default App;
