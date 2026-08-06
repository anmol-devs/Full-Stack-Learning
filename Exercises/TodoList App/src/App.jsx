import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo('')
  }

  const handleEdit = () => {

  }

  const handleDelete = () => {

  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item;
    })
    setTodos(updatedTodos);
  }

  return (
    <>
      <Navbar />
      <div className="container bg-blue-200 my-6 mx-auto p-4 rounded-md min-h-[80vh]">

        <div className="add-todo my-3">
          <h2 className='font-bold my-2'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" placeholder="Enter a new todo..." className="border border-black-300 bg-white rounded py-1 px-4 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button onClick={handleAdd} className="button bg-blue-500 px-2 py-1 text-white rounded-md cursor-pointer hover:bg-blue-700 font-semibold mx-3">Add</button>
        </div>
        <h2 className='font-bold'>Your Todos</h2>
        <div className="todos">

          {todos.map(item => {
            return (
              <div key={item.id} className="todo flex w-1/3 justify-between my-3">
                <div className="flex items-center">
                  <input className='mr-1' type="checkbox" checked={item.isCompleted} onChange={() => handleCheckboxChange(item.id)} />
                  <div className={`text text-xl ${item.isCompleted ? 'line-through' : ''}`}>{item.todo}</div>
                </div>
                <div>
                  <button onClick={handleEdit} className="button bg-blue-500 px-1.5 py-0.5 text-white rounded-md cursor-pointer hover:bg-blue-700 font-semibold mx-1">Edit</button>
                  <button onClick={handleDelete} className="button bg-blue-500 px-1.5 py-0.5 text-white rounded-md cursor-pointer hover:bg-blue-700 font-semibold mx-1">Delete</button>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </>
  )
}

export default App