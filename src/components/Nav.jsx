import React from 'react'
import { MdFastfood } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

function Nav() {
  return (
   <nav className='w-full h-[100px] p-[30px] flex justify-between gap-1 '>
    {/* nav-left-icon */}
    <div className='h-[3.4rem] w-[3.4rem] bg-white flex flex-row items-center justify-center rounded-sm shadow-xl/20'> <MdFastfood className='h-[1.9rem] w-[1.7rem] text-green-400' /> </div>

    {/* nav-search-bar */}
    <form className='flex items-center rounded-sm h-[3.4rem] w-[60%] bg-white gap-[1rem] px-5 shadow-xl/20 hover:bg-slate-200'>
        <FiSearch className='h-[1.4rem] w-[1.4rem] text-green-400 cursor-pointer'/>
        <input type="text"  placeholder='Search Your Food..' className='w-full border-none outline-0 cursor-pointer'/>
    </form>

    {/* nav-right-icon */}
    <div className='h-[3.4rem] w-[3.4rem] bg-white flex flex-row items-center justify-center rounded-sm shadow-xl/20 relative'> 
    <span className='absolute top-0 right-1 text-green-400 font-semibold'>0</span>
    <FiShoppingBag className='h-[1.9rem] w-[1.7rem] text-green-400 cursor-pointer'/> </div>
   </nav>
  )
}

export default Nav
