import React from 'react'
import { NavLink } from 'react-router-dom'
// Apne NavLink ka use kiya hai as isme apne ko ek to anchor tag ki jrurt nhi padti, and apne href ki jgh to ka use krte hai, and isme apne className bhi lga skte hai. Apne paas Link tag bhi hota hai but usme className nhi use kr skte.

const Navbar = () => {
    
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/login"><li>Login</li></NavLink>
      </nav>
    </div>
  )
}

// simple anchor tag apne routing ke liye isliye nhi use krte as usse page baar baar reload hota hai aur react ka single page application ka concept khatam ho jata hai. isliye hum react router ka use karte hai.

export default Navbar