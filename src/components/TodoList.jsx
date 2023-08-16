import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    
  return (
    <div>
    {props.todos.map((el)=>{
         return(
             <TodoItem 
             complaited={el.complaited}
             setTodos={props.setTodos}
             todos={props.todos}
             key={el.id}
             title={el.title}
             date={el.date}
             id={el.id}
              />
         )
     })}
         </div>
  )
}

export default TodoList