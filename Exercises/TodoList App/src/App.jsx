import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  // ye useState ka initial value localStorage se le raha hai. Agar localStorage me 'todos' key exist karti hai to uska value parse karke useState me set karega, warna empty array set karega.
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })
  const [todo, setTodo] = useState('')
  const [showFinished, setShowFinished] = useState(true)

  // Save only after React has updated the todos state.
  // browser ki local storage me save krne ke liye useEffect ka use kiya hai. Jab-jab todos state update hogi, tab ye chlega.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const toggleFinished = () => {
    setShowFinished(!showFinished)
  }


  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo('')
  }

  // one method for handleEdit
  // const handleEdit = (id) => {
  //   const updatedTodos = todos.map(item => {
  //     if (item.id === id) {
  //       return { ...item, todo: prompt('Edit your todo:', item.todo) }
  //     }
  //     return item;
  //   })
  //   setTodos(updatedTodos);
  // }

  // another method for handleEdit
  const handleEdit = (e, id)=>{ 
    let t = todos.filter(i=>i.id === id) 
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos)
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(item => item.id !== id))
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
      <div className="container bg-blue-100 my-10 mx-auto p-4 rounded-md min-h-[80vh] md:w-1/2 w-[90%]">
        <h1 className='text-2xl font-bold text-center mb-7 bg-blue-800 text-white p-2 rounded-md'>iTask - Manage Your Todos at One Place</h1>
        <div className="add-todo my-3">
          <h2 className='font-bold my-2 text-xl'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" placeholder="Enter a new todo..." className="border border-black-300 bg-white rounded py-1.5 px-4 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button onClick={handleAdd} disabled={todo.length === 0} className="button bg-blue-500 px-2 py-1 w-full text-white rounded-md cursor-pointer hover:bg-blue-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-blue-500">Save</button>
        </div>

        {/* <input type="checkbox" checked={showFinished} onChange={toggleFinished} className="" /> */}
        <label className="mt-5 mb-2 gap-3 text-lg cursor-pointer flex items-center">
          <input
            type="checkbox"
            checked={showFinished}
            onChange={toggleFinished}
            className="sr-only"
          />

          {showFinished ? <MdCheckBox className="text-blue-700 hover:text-blue-900"/> : <MdCheckBoxOutlineBlank />}
          Show Finished
        </label>

        <div className="divider my-3 mx-auto border-t w-3/4 border-blue-600 opacity-35 rounded-2xl"></div>

        <h2 className='font-bold text-xl'>Your Todos</h2>
        <div className="todos">

          {todos.length === 0 && <div className="text-gray-500 my-4">No todos yet!</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && ( // agar showFinished true hai means checked hai to hi finished waale dikhaega, agar showFinished false hai means unchecked hai to finished waale hide ho jaayenge.
              <div key={item.id} className="todo flex md:w-3/4 w-full justify-between my-3 gap-3">
                <div className="flex min-w-0">

                  {/* <input className='mr-2' type="checkbox" checked={item.isCompleted} onChange={() => handleCheckboxChange(item.id)} /> */}
                  {/* Custom checkbox with icon */}
                  <label className="mr-2 text-lg cursor-pointer flex items-center">
                    <input
                      type="checkbox"
                      checked={item.isCompleted}
                      onChange={() => handleCheckboxChange(item.id)}
                      className="sr-only"
                    />
                    {item.isCompleted ? <MdCheckBox className="text-blue-700 hover:text-blue-900"/> : <MdCheckBoxOutlineBlank />}
                  </label>

                  <div className={`text text-lg min-w-0 wrap-break-word ${item.isCompleted ? 'line-through' : ''}`}>{item.todo}</div>
                </div>
                <div className="buttons flex h-full">
                  {/* <button onClick={() => handleEdit(item.id)} className="button bg-blue-500 px-2.5 py-1.5 text-white rounded-md cursor-pointer hover:bg-blue-700 font-semibold mx-1"><FiEdit /></button> */}
                  <button onClick={(e) => handleEdit(e, item.id)} className="button bg-blue-500 px-1.5 py-0.5 text-white rounded-md cursor-pointer hover:bg-blue-700 font-semibold mx-1"><FiEdit /></button>
                  <button onClick={() => handleDelete(item.id)} className="button bg-blue-500 px-2.5 py-1.5 text-white rounded-md cursor-pointer hover:bg-blue-700 font-semibold mx-1"><RiDeleteBin7Line /></button>
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
