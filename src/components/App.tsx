import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import TodoItem from './TodoItem';
import TableTodoList,{ItoDoItem} from './TableTodoList';
import AddTodo from './AddTodo';
import getTime from '../utils/timeCase';
import Modal from './Modal'





const text = "Yjs is a CRDT implementation that exposes its internal data structure as shared types. Shared types are common data types like Map or Array with superpowers: changes are automatically distributed to other peers and merged without merge conflicts."

function App() {
  const [todoListArray, setTodoListArray] = useState<ItoDoItem[]>([]);
  const [showModal,setShowModal]=useState(false)
  const [modalValue,setModalValue]=useState("")

  const Add=(text:string)=>{

    let addValue:ItoDoItem={
      index: todoListArray.length+1,
      done: text==="done"?true:false,
      text:text,
      time:getTime(new Date())
    }
    setTodoListArray([...todoListArray,addValue])
    // setTodoList([...todoList,{text: text, time: getTime(new Date())}])
  }

  const showDetail =(props:string)=>{
    setShowModal(true)
    setModalValue(props)
  }

  return (
    <div className="App">
      <div className="section">
        <h1>
          Todos List
        </h1>
        <AddTodo click={Add}/>
        <TableTodoList toDoList={todoListArray} showDetail={showDetail}/>
      </div>
      <Modal show={showModal} showText={modalValue} closeModal={()=>setShowModal(false)} />
    </div>
  );
}

export default App;
