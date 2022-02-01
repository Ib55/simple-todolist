import React, { useState } from 'react';
import List from './List'
function Form() {
    const [todoTitle,setTodoTitle] = useState('')
    const [todoList,setTodoList] = useState([]);
    const addTodo=(a)=>{
     if(!a){alert('Enter value')}
     else{
         const newTodo ={
             id:Date.now(),
             title:a
         }
         setTodoList([...todoList,newTodo])
     }
    }
  return <div>
      <form className='form-group d-flex'>
          <input onChange={(e)=>setTodoTitle(e.target.value)} value={todoTitle} className='form-control' type="text" />
          <button onClick={(e)=>{
              e.preventDefault()
              addTodo(todoTitle)
              setTodoTitle('')
          }} className='btn btn-info'>Add Todo</button>
      </form>
      <List ib={todoList} ek={setTodoList}/>
  </div>;
}

export default Form;
