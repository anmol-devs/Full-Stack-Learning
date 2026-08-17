// "use client"
// import { useState, useEffect } from "react";
import fs from "fs/promises"
import Navbar from "@/components/Navbar"

export default function Home() {
  // const [count, setCount] = useState(0)
  // page.js is a server component so we cannot use useState or useEffect in this file. Ise apne ko client component me use krna padega.
  // NextJS me by default sab kuch server component ka hota hai which means that it will be rendered on the server first and sent to the client as HTML. Agar apko client side me kuch karna hai like useState or useEffect then apko usko client component me use krna padega.
  // Agar ham chahte hai ki ye sb client me chle to apne ko upr "use client" likhna padega. But agar apko server side me hi chalana hai to apko "use client" nahi likhna padega.
  // Ye sab isliye hai  

  console.log("Hey I am harry") // In server component, console.log server side me hi chlega and terminal me print hoga and client side ke console means browser waale console me print nahi hoga. Mai directly iski madad se yaha par vo sensitive kaam kar skta hu, jo client ko pta na lage.
  // Maan lo ki jaise neeche apno ne .gitignore file ko read kiya hai, and apne chahte hai ki ye sirf server side hi print ho for some reasons, to aise kaamo ke liye apne ko server component ki jarurt padti hai. Agar ye client component hota to ye browser ke console me print ho jata and sensitive kaam ka data leak ho jata.
  // AND FROM NEXTJS 16+, console.log BROWSER CONSOLE ME SHOW HOGA WITH SERVER ANNOTATION.  
  
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  return (
   <div>
    <Navbar/>
    {/* Navbar ek client component hai and use apno ne server component me import kr liya. And ye isliye kiya apno ne kyuki kai baar aisi kaam krne padte hai apne ko jiske useState, useEffect ya koi aisi cheej ka use krna padta hai jisme "use client" ki jrurt pade, to aise apne kar skte hai. */}
    I am a component 
    {/* {count} */}
    {/* <button onClick={()=> setCount(count + 1)}>Click me</button> */}
   </div>
  );
}




// NextJS ek full stack frameword hai yaani ki frontend bhi aap isme likh skte ho and backend bhi.
// Ab upr fs import kra hai, jo ki server side use hone waala component hai ek. And vo tb hi chlega agar server component me use ho rha hai to. And agar apno ne is component ko client component bna diya to ye nhi chal paaga.