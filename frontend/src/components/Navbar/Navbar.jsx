import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='font-bold flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#26225C]'>
      <div className='hidden md:flex items-center'>
        <ul className='flex space-x-4'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Features</li>
          <li className='p-4'>Developers</li>
          <li className='p-4'>Contact</li>
        </ul>
        <a
          href="#"
          className="rounded-md bg-[#FFDE59] px-3.5 py-2.5 text-sm font-bold text-[#26225C] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign Up
        </a>
      </div>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-black-900 bg-[#E5E5E5] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <li className='p-4 border-b border-blue-600'>Home</li>
        <li className='p-4 border-b border-blue-600'>Features</li>
        <li className='p-4 border-b border-blue-600'>Developers</li>
        <li className='p-4 border-b border-blue-600'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
