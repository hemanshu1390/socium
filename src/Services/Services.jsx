
import React from 'react';
// import Link from '@/node_modules/next/link';
import Websitedev from '/website-development.jpg';
import Mobiledev from '/Mobile-Dev.jpg';
import Hiredev from '/Hire-Dev.jpg';
import Digitalmarketing from '/digital_marketing.jpg';
import Cybersecurity from '/Cyber-Security.jpg';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

// import Footer from '/Footer';

const Services = () => {
  return (
    <>
      {/* From Uiverse.io by Javierrocadev */}
      <div className="flex flex-wrap justify-center gap-6 p-4 mt-24">
        {/* First Card */}
        <div className="relative group ` cursor-pointer overflow-hidden text-gray-50 h-72 w-full sm:w-72 md:w-80 lg:w-96 rounded-2xl hover:duration-700 duration-700">
          <div className="w-full h-72 bg-lime-400 text-gray-800">
            <img src={Websitedev} alt="Website Development" width={320} height={240} className="object-cover w-full h-full" />
          </div>
          <div className="absolute bg-blue-900 -bottom-24 w-full p-3 flex flex-col gap-1 group-hover:bottom-0 group-hover:duration-600 duration-500">
            <span className="text-yellow-600 font-bold text-xl">Website Development</span>
            {/* <button className="text-gray-800 font-bold text-3xl">Cheat Sheet</button> */}
            <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/WebDev"><button className='bg-yellow-600 px-4 py-2 hover:bg-yellow-700 rounded-lg cursor-pointer'>Know More</button></Link>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-72 w-full sm:w-72 md:w-80 lg:w-96 rounded-2xl hover:duration-700 ">
          <div className="w-full h-72 bg-lime-400 text-gray-800">
            <img src={Mobiledev} alt="Mobile Development" width={320} height={240} className="object-cover w-full h-full" />
          </div>
          <div className="absolute bg-blue-900 -bottom-24 w-full p-3 flex flex-col gap-1 group-hover:bottom-0 group-hover:duration-600 duration-500">
            <span className="text-yellow-600 font-bold text-xl">Mobile Development</span>
            <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/MobDev">      <button className='bg-yellow-600 px-4 py-2 hover:bg-yellow-700 rounded-lg cursor-pointer'>Know More</button></Link>
          </div>
        </div>

        {/* Third Card */}
        <div className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-72 w-full sm:w-72 md:w-80 lg:w-96 rounded-2xl hover:duration-700 ">
          <div className="w-full h-72 bg-lime-400 text-gray-800">
            <img src={Hiredev} alt="Hire Developer" width={320} height={240} className="object-cover w-full h-full" />
          </div>
          <div className="absolute bg-blue-900 -bottom-24 w-full p-3 flex flex-col gap-1 group-hover:bottom-0 group-hover:duration-600 duration-500">
            <span className="text-yellow-600 font-bold text-xl">Hire Developer</span>
            <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/HireDev">  <button className='bg-yellow-600 px-4 py-2 hover:bg-yellow-700 rounded-lg cursor-pointer'>Know More</button></Link>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-72 w-full sm:w-72 md:w-80 lg:w-96 rounded-2xl hover:duration-700 ">
          <div className="w-full h-72 bg-lime-400 text-gray-800">
            <img src={Digitalmarketing} alt="Digital Marketing" width={320} height={240} className="object-cover w-full h-full" />
          </div>
          <div className="absolute bg-blue-900 -bottom-24 w-full p-3 flex flex-col gap-1 group-hover:bottom-0 group-hover:duration-600 duration-500">
            <span className="text-yellow-600 font-bold text-xl">Digital Marketing</span>
            <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/Digimar"><button className='bg-yellow-600 px-4 py-2 hover:bg-yellow-700 rounded-lg cursor-pointer'>Know More</button></Link>
          </div>
        </div>

        {/* Fifth Card */}
        <div className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-72 w-full sm:w-72 md:w-80 lg:w-96 rounded-2xl hover:duration-700 ">
          <div className="w-full h-72 bg-lime-400 text-gray-800">
            <img src={Cybersecurity} alt="Cyber Security" width={320} height={240} className="object-cover w-full h-full" />
          </div>
          <div className="absolute bg-blue-900 -bottom-24 w-full p-3 flex flex-col gap-1 group-hover:bottom-0 group-hover:duration-600 duration-500">
            <span className="text-yellow-600 font-bold text-xl">Cyber Security Services </span>
            <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         <Link to="/CyberSecurity">   <button className='bg-yellow-600 px-4 py-2 hover:bg-yellow-700 rounded-lg cursor-pointer'>Know More</button></Link>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Services;