import React from 'react'
import logo from "../assets/assets_frontend/logo.svg";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300'>
            <img className='w-44 cursor-pointer' src={logo} alt="" />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none  bg-[#5f6FFF]w-4/5 m-auto h-0.5 hidden'/>
                </NavLink>
                 <NavLink  to='/doctors'>
                    <li className='py-1'>All Doctors</li>
                    <hr className='border-none outline-none bg-[#5f6FFF]w-4/5 m-auto h-0.5 hidden'/>
                </NavLink>
                 <NavLink to='about'>
                    <li className='py-1'>About</li>
                    <hr className='border-none outline-none bg-[#5f6FFF] w-4/5 m-auto h-0.5 hidden'/>
                </NavLink>
                 <NavLink to='contact'>
                    <li className='py-1'>Conatct</li>
                    <hr className='border-none outline-none bg-[#5f6FFF] w-4/5 m-auto h-0.5 hidden'/>
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                <button className='bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
            </div>
        </div>
    );
};

export default Navbar