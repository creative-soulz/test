import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
const Header = () => {

    const not=5
  return (
    <div className='w-full h-full flex'>
        <div className='h-full w-1/2 flex items-center p-5 justify-start'><h1 className='text-2xl text-white font-bold'>LOOOOO</h1></div>
        <div className='h-full w-1/2 flex items-center gap-4 p-5 justify-end '>
        <div className='relative'>
        <IoIosNotifications className='text-4xl text-white '>
        </IoIosNotifications>
        <h1 className='text-sm absolute bg-black h-6 w-6   flex -top-1 -right-2 z-10 items-center justify-center   rounded-full text-white font-bold'>{not}</h1>

        </div>
        <FaCircleUser className='text-4xl text-white'/>
        </div>

        
    </div>
  )
}

export default Header