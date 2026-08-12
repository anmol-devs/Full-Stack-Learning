import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [adjective, setAdjective] = useState("good")

  // const getAdjective = () => {
  //   return "another" + count
  // }
  // Vaise to Navbar wala component re-render nhi hoga kyuki vaha apno ne memo ka use kiya hai, but jaise ki apno ne getAdjective wala function bnaya hai, to jab jab ye app.jsx wala component re-render hoga, tab tab ye function change hoga (as javaScript me function re-render par change ho jata hai). And change hua function to means props change ho gye. It means ki memo ki functionality jo h ki vo props change hone pr hi component ko re-render krta hai, to aise navbar baar baar re-render hoga.
  // Ab is cheej ko solve krne ke liye apne useCallback hook ka use krte hai. useCallback hook basically ye kaam krta hai ki ye function ko yaad rakhta hai, aur jab tak dependencies ([] me jo likha hai vo waali) change nhi hoti, tab tak ye function ko change nhi hone deta. Jaise ki apno ne getAdjective function me count ko dependency ke roop me pass kiya hai, to jab tak count change nhi hoga, tab tak ye function change nhi hoga. And jab function change nhi hoga to props change nhi honge, and props change nhi honge to Navbar component re-render nhi hoga.

  // useCallback function ko freeze kr deta hai, and ye ham mainly tb use krte hai jb koi constant ho, jaise agar apne return "another" hi krte sirf to. But maan lo ki agr apne return "another" + count (jo ki ek constant nhi rha ab) ka use kre to count ki value 0 pr hi freeze rhegi chahe apne button se change hi kyu na kr rhe ho.  
  // Or agar chahte hai ki jab count change ho to ye function ko freeze mt kro, change krdo, to ye change krega. And dependency array me vo sb daal skte hai, jiske change hone pr chahte hai ki ye function freeze na rhe and change ho. Maan lo ki teen cheeje hai, "another" + count + count2 + adjective, and apne chahte hai ki in sbme agar count change ho to function unfreeze hokr run kre, vrna freeze hi rhe, to apne aise kr skte hai.
  const getAdjective = useCallback(() => {
    return "another" + count
  },[count] )

  // IMPORTANT
  // useMemo variable ko memoize krta hai and useCallback function ko memoize krta hai. useMemo me apne variable ko freeze krte hai, and useCallback me apne function ko freeze krte hai. 
  return (
    <>
      <Navbar adjective={"good"} getAdjective={getAdjective} /> 
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