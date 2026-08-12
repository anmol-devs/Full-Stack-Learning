import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// useMemo un applications me use hota hai jinme kaafi intensive tasks hote hai jaise ki data ko filter karna ya phir kisi array me se koi specific item ko find karna. Ye hook ye ensure karta hai ki jab tak dependencies change nahi hoti tab tak ye expensive computation dobara run na ho as jo example btaye unme computation heavy ho jaati hai.

// Ek array ka example hai jisme 30 million entrie hai or usme se ek specific item ko find karna hai. Ye kaafi expensive task hai or agar ye task har render me run hota hai to ye application ko slow kar dega. Isliye hum useMemo hook ka use karte hai taki ye task sirf tab run ho jab dependencies change ho. And dependency ka mtlb hai ki agar humne numbers array ko change kiya to hi ye task dobara run hoga.
// Is function me fill(0) means ki array ke saare elements ko 0 se fill krna hai. And map((_, i)) me _ = current element ki value. Yahan array me har value 0 hai, kyunki .fill(0) kiya hai. Is value ki zarurat nahi hai, isliye convention ke taur par _ likha hai. i = current element ka index/position. Ye 0 se start hoga: 0, 1, 2, ... 29_999_999. 
// .map((currentValue, index) => {}): Pehla parameter hamesha element value hota hai, doosra uska index. Is function me har index ke liye ek object bnega.
// Aise code ka common usage performance testing / debugging hota hai—for example React list rendering, searching, pagination, virtual scrolling, ya check karna ki huge data me app slow hota hai ya nahi. Real app ke liye 3 crore objects memory me rakhna bahut heavy hai, isliye normally pagination ya virtualized lists use ki jaati hain.
const nums = new Array(30_000_000).fill(0).map((_, i)=>{
  return {
    index: i,
    isMagical: i===29_000_000
  }
})


function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  // const magical = numbers.find(item=>item.isMagical===true) // Expensive Computation: count change hone pr component re-render hoga. Aise to application bhot slow ho jaaegi. Isliye neeche useMemo ka use kra hai. 
  // Ab yaha par magical variable ki value find krni hoti hai, useMemo ke bina krte hai to har render pr dobara find hogi value, bhot jyada expensive hoga, har count change hone par run hogi.
  // But useMemo memoize kr deta hai, iska mtlb hai ki ek baar ye value find krke save kr lega, and har render pr dobara find nhi krega. And dobara tab hi find krega jab numbers array change hoga. And ye dobara compute krne waali cheej apne second argument [] me daalenge, jaise yaha jab numbers change ho tb dobara compute kiya jaaega. Ise dependency array kehte hai.
  const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [numbers])

  return (
    <>
      <div>
        <span>Magical number is {magical.index}</span>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          if(count == 10){ // Ab count 10 hone pr numbers array ko change karenge, taki magical variable dobara compute ho jaaye.
            setNumbers(new Array(10_000_000).fill(0).map((_, i)=>{
              return {
                index: i,
                isMagical: i===9_000_000
              }
            }))
          }
        
        }}>
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