import React, { useState } from "react";
import logo from "../assets/assets_frontend/logo.svg";
import profile from "../assets/assets_frontend/profile_pic.png";
import drop from "../assets/assets_frontend/dropdown_icon.svg";

import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [shoeMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300">
      <img className="w-44 cursor-pointer" src={logo} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none  bg-[#5f6FFF] w-3/5 m-auto h-0.5 hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">All Doctors</li>
          <hr className="border-none outline-none bg-[#5f6FFF] w-3/5 m-auto h-0.5 hidden" />
        </NavLink>
        <NavLink to="about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none bg-[#5f6FFF] w-3/5 m-auto h-0.5 hidden" />
        </NavLink>
        <NavLink to="contact">
          <li className="py-1">Conatct</li>
          <hr className="border-none outline-none bg-[#5f6FFF] w-3/5 m-auto h-0.5 hidden" />
        </NavLink>
      </ul>
      {/* //Login Page Menu fN */}
      <div className="flex items-center gap-4">
        {
        token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={profile} alt="" />
            <img className="w-2.5" src={drop} alt="" />
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
      
      </div>
    </div>
  );
};

export default Navbar;
