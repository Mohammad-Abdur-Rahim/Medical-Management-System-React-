import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterdoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  useEffect(() => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/*------------------ Main left and right section ------------------------------- */}
        <div className="flex-col gap-4 text-gray-600 space-y-5 ">
          <p onClick={()=>{ speciality === 'General physician' ? navigate('/doctors'): navigate('/doctors/General physician')}} className={` sm-w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>General physician</p>
          <p onClick={()=>{ speciality === 'Gynecologist' ? navigate('/doctors'): navigate('/doctors/Gynecologist')}} className={` sm-w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gynecologist</p>
          <p onClick={()=>{ speciality === 'Dermatologist' ? navigate('/doctors'): navigate('/doctors/Dermatologist')}} className={` sm-w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Dermatologist</p>
          <p onClick={()=>{ speciality === 'Pediatricians' ? navigate('/doctors'): navigate('/doctors/Pediatricians')}} className={` sm-w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Pediatricians</p>
          <p onClick={()=>{ speciality === 'Neurologist' ? navigate('/doctors'): navigate('/doctors/Neurologist')}} className={` sm-w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Neurologist</p>
          <p onClick={()=>{ speciality === 'Gastroenterologist' ? navigate('/doctors'): navigate('/doctors/Gastroenterologist')}} className={`sm-w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gastroenterologist</p>
        </div>
        <div className="w-full grid grid-cols-4 gap-4 gap-y-6">
          {filterdoc.map((data, idx) => (
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
      </div>
    </div>
  );
};

export default Doctors;
