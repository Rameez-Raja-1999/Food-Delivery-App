import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import image1 from "../assets/image1.avif" 



function Card({ name, image, price, id, category, type }) {
  return (
    <div className='h-[400px] w-[280px] bg-white p-[12px] rounded-lg shadow-lg hover:border-3 border-green-400'>
      <img src={image || image1} alt={name} className='h-[65%] w-[100%] object-cover rounded-lg'/>
      <p className='font-semibold text-[20px] mt-[4px] mb-[9px]'>{name}</p>
    
      <div className='flex justify-between'>
        <div>
          <p className='text-green-400 font-bold'>Rs {price}/-</p>
        </div>

        <div className='flex gap-[0.4rem] justify-center items-center'>
         {type==="veg"?<LuLeafyGreen className='text-green-400 font-semibold'/>:<GiChickenOven className='text-green-400 font-semibold'/>}
    
          <p className='text-green-400 font-semibold'>{type}</p>
        </div>
      </div>
      
      <button className='h-[10%] w-[100%] bg-green-400 mt-[1rem] text-white hover:bg-green-300 cursor-pointer rounded-lg transition-all  font-semibold'>
        Add to Dish
      </button>
    </div>
  )
}

export default Card