import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [first, setFirst] = useState(0)
  const [color, setColor] = useState(0)


  // useEffect: useEffect is a hook that allows you to perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API. Means, jab bhi koi componenet render hoga, useEffect run hoga. Iske 3 cases hote hai.
  // Case 1: Run on every render. Isme koi dependency array nahi hota, isliye ye har render pe run hoga. Matlb jab bhi component render hoga, ye useEffect run hoga, har ek render pe alert show hoga.
  // useEffect(() => {
  //   alert("Hey I will run on every render")
  // })

  // // Case 2: Run only on first render. Isme dependency array empty hota hai, isliye ye sirf first render pe run hoga. Matlb jab component first time render hoga, ye useEffect run hoga, aur alert show hoga. Baad me agar component re-render hota hai, to ye useEffect run nahi hoga.
  // useEffect(() => {
  //   alert("Hey welcome to my page. This is the first render of app.jsx")
  // }, [])

  // // Case 3: Run only when certain values change. Isme dependency array me koi value hoti hai, isliye ye sirf tab run hoga jab wo value change hoti hai. Matlb jab component render hoga, aur agar wo value change hoti hai, to ye useEffect run hoga, aur alert show hoga. Agar wo value change nahi hoti hai, to ye useEffect run nahi hoga. Ek to render pe ye useEffect run hoga, aur agar wo value change hoti hai, to ye useEffect run hoga. Agar wo value change nahi hoti hai, to ye useEffect run nahi hoga dobara.
  // useEffect(() => {
  //   alert("Hey I am running because count was changed")
  // }, [count])

  // // Example of Cleanup function. Isme return ke andr ek function hota hai, jo component ke unmount hone pr run hota hai. Ye ek trh ka cleanup function hota hai. And ek baar component unmount ho gya and fir baad me agar component re-render hota hai, to alert show hoga mount ka and fir un mount ke time cleanup function wala alert show hoga.
  // useEffect(() => {
  //   alert("Hey welcome to my page. This is the first render of app.jsx")
    
  //   return () => {
  //     alert("component was unmounted")
  //   }
  // }, [])

  // main.jsx me strict mode on hai, isliye 2 baar render hoga, aur 2 baar alert show hoga. Agar strict mode off kar do, to sirf 1 baar alert show hoga.

  useEffect(() => {
    alert("Count was changed")
    setColor(color + 1)
  }, [count])


  return (
    <>
      {/* <Navbar color={"navy " + "blue" + color} /> */}
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