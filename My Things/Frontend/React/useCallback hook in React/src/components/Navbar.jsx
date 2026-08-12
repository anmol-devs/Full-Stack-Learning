import React from 'react'
import { memo } from 'react'
// Normally to state change hone par ye component re-render hota hai but agar ham memo ka use krenge to ye aise state change hone par re-render nahi hoga, jab props change hogi tab hi hoga.

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
      I am a {adjective} Navbar
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)