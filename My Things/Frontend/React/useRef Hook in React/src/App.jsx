import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const btnRef = useRef()

 // doosra use case of useRef
 // ham kisi bhi dom element ko reference kr skte hai useRef ki mdad se, jaise apno ne btnRef wala useRef bnaya hai, and use button tag me add kra hai, and fir useEffect me us button ka background color change kr diya hai, and fir ek button aur bnaya hai, jiska onClick event me btnRef.current.style.display = "none" kr diya hai, to ye button click hote hi dusre button ko hide kr dega.
 // And useRef ka use tb ki kro jab hame kisi value ko persist krwana hai across hai ek re-rendering me. And agar vo ref waali value dom me kahi bhi use nhi ho rhi hai, means maanlo apno ko re-rendering krwani hai to vaha apne useRef ka use nhi krenge, vaha useState ka hi use krenge. 
 // apne useRef ko forms me bhi use kr skte hai.
 
  useEffect(() => { 
    console.log(`First rendering..`) 
    btnRef.current.style.backgroundColor = "red"
  }, []);
  

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
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={()=>{btnRef.current.style.display = "none"}}>Change me</button>
    </>
  )
}

export default App