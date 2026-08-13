import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux' // useSelector hook ka use krke hum redux store ke state ko access kr skte hai and useDispatch hook ka use krke hum redux store ke state ko update kr skte hai.
import { decrement, increment, multiply } from './redux/counter/counterSlice' // Jin functions ko use krna hai, unhe import krenge.

function App() { 
  const count = useSelector((state) => state.counter.value) // is line ka mtlb hai ki hmari redux store me se count ki value ko lekr aao.
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button>
      </div>

    </>
  )
}

export default App