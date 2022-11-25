import React from 'react'
import Table from "react-bootstrap/Table"

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <label id="itemComponent">
      <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
      <div id="todoName">{todo.name}</div>
      <div id="todoDate">{todo.day} {todo.month} {todo.year}</div>
    </label>
  )
}
