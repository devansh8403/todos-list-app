import React from 'react'
import TodoItem from '../myComponents/TodoItem'

export default function Todos(props) {
  return (
    <div>
      <h3>Todo list</h3>
      <TodoItem todo = {props.todos[0]}/>
    </div>
  )
}
