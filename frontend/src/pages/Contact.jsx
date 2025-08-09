import React from "react";
import contact from "../assets/assets_frontend/contact_image.png";

const Contact = () => {
  return (
    <div>
      <div>
        <p className="text-gray-500 text-center text-2xl pt-10">
          Contact <span className="font-semibold text-gray-700">US</span>
        </p>
      </div>


      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm ">
          <img className="w-full md:max-w-[360px]" src={contact} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className=" font-semibold text-lg text-gray-600">Our OFFICE</p>
          <p className="text-gray-500">
            54709 Willms Station Suite 350,
            <br /> Washington, USA
          </p> 
          <p className="text-gray-500">
            Tel: (415) 555‑0132 <br />
            Email: greatstackdev@gmail.com
          </p>
          <p className="text-gray-600 font-semibold text-lg">Careers at PRESCRIPTO</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p> 
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
