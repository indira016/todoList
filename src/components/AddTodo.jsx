import React, { useState } from 'react'
import Button from './ui/Button'
import Card from './ui/Card'
import classes from './AddTodo.module.css'

const AddTodo = (props) => {
const [title,setTitle]=useState('')
const [date,setDate]=useState('')



const titleChangeHandler=(e)=>{
    setTitle(e.target.value)
    console.log(e.target.value);
}
const dateChangeHandler=(e)=>{
    setDate(e.target.value)
    console.log(e.target.value);
}
const sumbitHandler=(e)=>{
    e.preventDefault()
    props.onAdd(title,date)

    setTitle('')
    setDate('')
}

  return (
         <Card className={classes.input}>
         <form  onSubmit={sumbitHandler}>
           <input value={title} type="text" placeholder='title' onChange={titleChangeHandler} />
           <input value={date} type="date" placeholder='date' onChange={dateChangeHandler} />
           <Button  type='sumbit'>add</Button>
       </form> 
                </Card>
  )
}

export default AddTodo