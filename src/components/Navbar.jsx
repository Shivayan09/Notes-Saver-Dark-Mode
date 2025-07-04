import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row md:-space-x-60 place-content-evenly mb-5 w-[100vw] text-[1.4rem] bg-cyan-600 h-14 items-center'>
        <NavLink to='/main'>
            <p className='text-white'>Home</p>
        </NavLink>

        <NavLink to='/pastes'>
            <p className='text-white'>Notes</p>
        </NavLink>
    </div>
  )
}

export default Navbar
