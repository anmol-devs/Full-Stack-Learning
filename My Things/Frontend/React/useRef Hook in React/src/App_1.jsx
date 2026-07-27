import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const a = useRef(0)

  // useState me to poora component re-render hota hai and useRef me vo particular value persist krti hai re-render ke baad bhi, vrna useRef na use kre to like agr a = 0 krke use kr rhe hai, and a ki value bdha rhe hai har count ke saath, to intital to 0 hai, and har re-render pr firse 0 pr hi aajegi, and bdhegi nhi, isiliye useRef ka use kiya jata hai.
  // Ye to hai useRef ka pehla use case (across re-render value persist krna), and doosra app.jsx me hai.
  useEffect(() => {
    a.current = a.current + 1
    console.log(`rerendering and the value of a is ${a.current}..`) 
  });
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App