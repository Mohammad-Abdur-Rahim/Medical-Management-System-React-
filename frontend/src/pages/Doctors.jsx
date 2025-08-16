import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {

const {speciality} =useParams()
const [filterdoc,setFilterDoc] =useState([])
const navigate = useNavigate()
const {doctors} = useContext(AppContext)

useEffect(() => {
  if (speciality) {
    setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
  } else {
    setFilterDoc(doctors);
  }
}, [doctors, speciality]);


    return (
        <div>
            <p>Browse through the doctors specialist.</p>
            <div>
                {/*------------------ Main left and right section ------------------------------- */}
                <div>
                    <p>General physician</p>
                    <p>Gynecologist</p>
                    <p>Dermatologist</p>
                    <p>Pediatricians</p>
                    <p>Neurologist</p>
                    <p>Gastroenterologist</p>
                </div>
                <div>
                    {
                        filterdoc.map((data, idx) => (
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
        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;