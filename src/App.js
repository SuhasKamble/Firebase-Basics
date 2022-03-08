import React from 'react'
import AddTodo from './AddTodo'
import './App.css'
import Todo from './Todo'
const App = () => {
  return (
    <div className='container'>
      <h2 className='title'>Todo App - Firebase</h2>
      <AddTodo />
      <Todo />
    </div>
  )
}

export default App