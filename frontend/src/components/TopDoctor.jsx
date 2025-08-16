import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctor = () => {
  const navigate = useNavigate();
  // Step --2 Use UseContext ----------------------------------------------------------------
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h2 className="text-3xl font-medium text-[#1F2937]">
        Top Doctors to Book
      </h2>
      <p className="sm:1/3 text-center text-sm text-[#4B5563] ">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-5 gap-y-6 sm:px-0">
        {doctors.slice(0, 10).map((data, idx) => (
          <div
            onClick={() => navigate(`/appointment/${data._id}`)}
            className="border  border-blue-200 rounded-b-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={idx}
          >
            <img className="bg-blue-50" src={data.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{data.name}</p>
              <p className="text-gray-600 text-sm">{data.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
     
        className="bg-[#5f6FFF] text-white px-10 py-3 rounded-full mt-10 text-xl cursor-pointer"
      >
       All Doctors
      </button>
    </div>
  );
};

export default TopDoctor;
