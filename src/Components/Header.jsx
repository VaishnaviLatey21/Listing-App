import React, { useState } from 'react'
import logo from "./../Images/logo.png"
import { HiSearch , HiOutlineSun , HiSun} from "react-icons/hi";

function Header() {

  const [theme, setTheme] = useState(false);

  return (
    <div className='flex items-center pt-2 pl-3'>
        <img src= {logo} width={60} height={60} />

        <div className='flex bg-slate-200 p-2 w-full mx-5 items-center'>
            <HiSearch />
            <input type='text' placeholder='Search Games' className='px-2 bg-transparent  dark:bg-slate-400 outline-none' />
        </div>
   
       </div>
  )
}

export default Header