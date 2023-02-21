import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import TodoItem from './TodoItem'
import TableTodoList from './TableTodoList';
import AddTodo from './AddTodo';
import getTime from '../utils/timeCase';




const text = "Yjs is a CRDT implementation that exposes its internal data structure as shared types. Shared types are common data types like Map or Array with superpowers: changes are automatically distributed to other peers and merged without merge conflicts."
function App() {
  const [todoList, setTodoList] = useState([{ text: text, time: getTime(new Date()) }]);

  const Add=(text:string)=>{
    setTodoList([...todoList,{text: text, time: getTime(new Date())}])
  }

  return (
    <div className="App">
      <header className="Contain">
        <h1>
          Todos List
        </h1>
        <AddTodo click={Add}/>
        <TableTodoList />

      </header>
    </div>
  );
}

export default App;
