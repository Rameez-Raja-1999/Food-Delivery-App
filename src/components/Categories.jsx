import React from "react";
import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { BiDish } from "react-icons/bi";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

function Categories() {
  const categoryData = [
    { Id: "1", name: "All", icon: <TiThSmallOutline className="text-green-400 w-[3.8rem] h-[3.8rem]" /> },
    { Id: "2", name: "Breakfast", icon: <MdOutlineFreeBreakfast className="text-green-400 w-[3.8rem] h-[3.8rem]" /> },
    { Id: "3", name: "Soups", icon: <TbSoup className="text-green-400 w-[3.8rem] h-[3.8rem]" /> },
    { Id: "4", name: "Pasta", icon: <CiBowlNoodles className="text-green-400 w-[3.8rem] h-[3.8rem]" /> },
    { Id: "5", name: "Main Course", icon: <BiDish className="text-green-400 w-[3.8rem] h-[3.8rem]" /> },
    { Id: "6", name: "Pizza", icon: <GiFullPizza className="text-green-400 w-[3.8rem] h-[3.8rem]" /> },
    { Id: "7", name: "Burger", icon: <GiHamburger className="text-green-400 w-[3.8rem] h-[3.8rem]" /> }
  ];

  return (
    <div className="flex flex-wrap gap-6 p-4 justify-center">
      {categoryData.map((category) => (
        <div 
          key={category.Id} 
          className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-green-200 h-[10rem] w-[10rem]"
        >
          <div className="text-4xl mb-2">{category.icon}</div>
          <span className="font-semibold text-gray-700">{category.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Categories;