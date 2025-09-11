import React, { useState } from "react";
// All Img Provide Js File---------
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const [showMenu,setShowMenu] =useState(false)

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300">
      <img onClick={()=>navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="" />
    <ul className="hidden md:flex items-start gap-5 font-medium">
  <li>
    <NavLink to="/" className="py-1">
      Home
    </NavLink>
    <hr className="border-none outline-none bg-[#5f6FFF] w-3/5 m-auto h-0.5 hidden" />
  </li>

  <li>
    <NavLink to="/doctors" className="py-1">
      All Doctors
    </NavLink>
    <hr className="border-none outline-none bg-[#5f6FFF] w-3/5 m-auto h-0.5 hidden" />
  </li>

  <li>
    <NavLink to="/about" className="py-1">
      About
    </NavLink>
    <hr className="border-none outline-none bg-[#5f6FFF] w-3/5 m-auto h-0.5 hidden" />
  </li>

  <li>
    <NavLink to="/contact" className="py-1">
      Contact
    </NavLink>
    <hr className="border-none outline-none bg-[#5f6FFF] w-3/5 m-auto h-0.5 hidden" />
  </li>
  <li>
  <hr className="border-none outline-none bg-[#5f6FFF] w-3/5 m-auto h-0.5 hidden" />
</li>

   
</ul>

      {/* //Login Page Menu fN */}
      <div className="flex items-center gap-4">
        {/* //Profile Section  With UseState-------------   */}
        {
        token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_rahim} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                    <p onClick={()=>navigate("/my-profile")} className="hover:text-black cursor-pointer">My Profile</p>
                    <p onClick={()=>navigate("/my-appointments")} className="hover:text-black cursor-pointer">My Appointment</p>
                    <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer"
          >
            Create Account
          </button>
        )
        }
        <img onClick={()=>{setShowMenu(true)}} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
      {/* ------------------------Mobile Menu ---------------- */}
      <div className={` ${showMenu ? 'fixed w-full' :'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
        <div className="flex items-center justify-between px-5 py-6">
          <img className="w-36" src={assets.logo} alt="" />
          <img className="w-7" onClick={()=>{setShowMenu(false)}} src={assets.cross_icon} alt="" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
         <NavLink onClick={()=> setShowMenu(false)} to={'/'}><p  className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
         <NavLink onClick={()=> setShowMenu(false)} to={'/doctors'}><p  className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink>
         <NavLink onClick={()=> setShowMenu(false)} to={'/about'}><p  className='px-4 py-2 rounded inline-block'>About</p></NavLink>
         <NavLink onClick={()=> setShowMenu(false)} to={'/contact'}><p  className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
