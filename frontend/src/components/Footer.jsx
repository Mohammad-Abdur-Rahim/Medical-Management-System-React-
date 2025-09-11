import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left-------------- */}
        <div>
          <img className="mb-5 w-60" src={assets.logof} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            sint, commodi tempore dolores temporibus possimus cumque consectetur
            deleniti soluta doloribus!
          </p>
        </div>
        {/* Center-------------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <NavLink to="/" className="py-1">
                Home
              </NavLink>
            </li>
            <li><NavLink to="/about" className="py-1">
                About Us
              </NavLink></li>
            <li><NavLink to="/contact" className="py-1">
                Contact Us
              </NavLink></li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* Right-------------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>rahimdev@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Copy right ------------- */}
      <div className="mb-5 border-b border-b-gray-300">
        <p className="py-5 text-sm text-center">
          Copyright © 2025 <span className="font-black">RahimDev_Future DIU</span> - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
