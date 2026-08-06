import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-800 text-white py-2 px-4">
        <div className="logo">
            <span className="text-xl font-bold">iTask</span>
        </div>
        <ul className="flex gap-4">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>About</li>
        </ul>
    </nav>
  )
}

export default Navbar