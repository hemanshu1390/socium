import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '/public/Socium-Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-[#00145b] fixed top-0 flex justify-between items-center px-10 h-24 z-20 w-full mx-auto text-white'>
     <Link to="/"> <img src={logo} alt="Logo" height={200} width={200} /></Link>

      <ul className='hidden lg:flex'>
        <Link to="/"><li className='p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-yellow-700'>Home</li></Link>
        <Link to="/About"><li className='p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-yellow-700'>About Us</li></Link>
        <Link to="/Services"><li className='p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-yellow-700'>Services</li></Link>
        <Link to="/Blog"><li className='p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-yellow-700'>Blogs</li></Link>
        <Link to="/Portfolio"><li className='p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-yellow-700'>Portfolio</li></Link>
        <Link to="/Contact"><li className='p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-yellow-700'>Contact Us</li></Link>
        <Link to="/"><button className='p-3 rounded-xl m-2 cursor-pointer duration-300 bg-yellow-700'>Get a Quote</button></Link>
      </ul>

      <div onClick={handleNav} className='block lg:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <img src={logo} alt="Logo" height={200} width={200} className='mt-8 mx-auto' />

        <div className="text-center">
          <Link to="/" onClick={handleNav}><li className='p-4 mt-10 border-b rounded-xl duration-300 hover:text-yellow-700 cursor-pointer border-gray-600'>Home</li></Link>
          <Link to="/About" onClick={handleNav}><li className='p-4 border-b rounded-xl duration-300 hover:text-yellow-700 cursor-pointer border-gray-600'>About Us</li></Link>
          <Link to="/Services" onClick={handleNav}><li className='p-4 border-b rounded-xl duration-300 hover:text-yellow-700 cursor-pointer border-gray-600'>Services</li></Link>
          <Link to="/Blog" onClick={handleNav}><li className='p-4 border-b rounded-xl duration-300 hover:text-yellow-700 cursor-pointer border-gray-600'>Blogs</li></Link>
          <Link to="/Portfolio" onClick={handleNav}><li className='p-4 border-b rounded-xl duration-300 hover:text-yellow-700 cursor-pointer border-gray-600'>Portfolio</li></Link>
          <Link to="/Contact" onClick={handleNav}><li className='p-4 border-b rounded-xl duration-300 hover:text-yellow-700 cursor-pointer border-gray-600'>Contact Us</li></Link>
          <Link to="/" onClick={handleNav}><button className='p-4 mt-6 border-b rounded-xl duration-300 bg-yellow-700 cursor-pointer border-gray-600'>Get a Quote</button></Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
