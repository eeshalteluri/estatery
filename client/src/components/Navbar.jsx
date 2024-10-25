import React, { useState } from 'react'
import Logo from '../assets/estateryLogo.png'

import { IoChevronDown } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='flex justify-between items-center px-6 py-4 border-b'>
      <nav className='text-secondary font-semibold flex items-center gap-8'>
      <img 
      src={Logo} 
      alt="Logo" 
      className='cursor-pointer'/>
        <ul className='hidden md:flex items-center gap-4 [&>li]:cursor-pointer'>
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li className='flex items-center gap-1'>Manage Property <IoChevronDown /></li>
          <li  className='flex items-center gap-1'>Resources <IoChevronDown /></li>
        </ul>
      </nav>

      <div className='hidden sm:flex gap-4'>
        <button className='border border-gray-300 rounded px-4 py-2'>Login</button>
        <button className='bg-primary text-white rounded px-4 py-2'>Sign up</button>
      </div>
      {open ? <IoMdClose className='sm:hidden text-2xl cursor-pointer' onClick={() => setOpen(!open)}/> : <IoIosMenu 
      className='sm:hidden text-2xl cursor-pointer'
      onClick={() => setOpen(!open)}/>}

      {open && (
        <div className='absolute top-12 right-5 bg-white w-48 p-4 rounded-md shadow-lg flex flex-col gap-4 ease-in-out duration-900'>
        <div className='text-sm flex justify-around sm:gap-4'>
        <button className='text-primary'>Login</button>
        <button className='p-2 px-6 bg-primary text-white rounded-md'>Sign up</button>
        </div>

          <ul className='flex flex-col gap-4 [&>li]:cursor-pointer'>
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li className='flex items-center gap-1'>Manage Property <IoChevronDown /></li>
          <li  className='flex items-center gap-1'>Resources <IoChevronDown /></li>
        </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar