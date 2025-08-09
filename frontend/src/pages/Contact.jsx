import React from "react";
import contact from "../assets/assets_frontend/contact_image.png";

const Contact = () => {
  return (
    <div>
      <div>
        <p className="text-gray-900 text-center text-4xl mb-5">
          Contact <span className="font-bold text-black">US</span>
        </p>
      </div>
      <div className="flex justify-center items-center gap-15 ">
        <div>
          <img src={contact} alt="" />
        </div>
        <div>
          <h4>Our OFFICE</h4> <br />
          <p>
            54709 Willms Station Suite 350,
            <br /> Washington, USA
          </p> <br />
          <p>
            Tel: (415) 555‑0132 <br />
            Email: greatstackdev@gmail.com
          </p> <br />
          <h4>Careers at PRESCRIPTO</h4>
          <p>Learn more about our teams and job openings.</p> <br /> <br />
          <button className="bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
