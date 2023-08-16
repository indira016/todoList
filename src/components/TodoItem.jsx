import React from 'react'
import Button from './ui/Button'
import Card from './ui/Card'
import classes from './TodoItem.module.css'

const TodoItem = (props) => {
    
const deleteHandler=(e)=>{
    props.setTodos( props.todos.filter((el)=>el.id !== e.target.id))
}
const checkboxChangeHandler=(e)=>{
    props.setTodos(props.todos.map((el=>{
        if(el.id===e.target.id){
            el.complaited =!el.complaited
        }
        return el
    })))
}

  return (
    <Card className={classes.users}>
    <ul>
        <li className={props.complaited ? classes.done : ''}>
            {props.title} {props.date}
        <input id={props.id} type="checkbox"  onClick={checkboxChangeHandler} />
        <Button id={props.id} onClick={deleteHandler} >delete</Button>
        </li>
    </ul>
    </Card>
  )
}

export default TodoItem