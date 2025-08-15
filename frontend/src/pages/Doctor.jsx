import  { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctor = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  
  const [filterDoc, setFilterDoc] = useState([]);

  // Filter doctors when speciality changes
  useEffect(() => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  }, [speciality, doctors]);

  return (
    <div>
      <p className="text-lg font-bold mb-4">
        Browse Doctor Speciality: {speciality || "All"}
      </p>

      {/* Specialties List */}

      <div className='flex gap-10 w-4/5 mx-auto'>
        <div className=" gap-4 mb-6 space-y-5">
        <p className='border border-gray-300 px-8 py-4 rounded-sm cursor-pointer'>General physician</p>
        <p className='border border-gray-300 px-8 py-4 rounded-sm cursor-pointer'>Gynecologist</p>
        <p className='border border-gray-300 px-8 py-4 rounded-sm cursor-pointer'>Dermatologist</p>
        <p className='border border-gray-300 px-8 py-4 rounded-sm cursor-pointer'>Pediatricians</p>
        <p className='border border-gray-300 px-8 py-4 rounded-sm cursor-pointer'>Gastroenterologist</p>
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {filterDoc.map((data, idx) => (
          <div
            onClick={() => navigate(`/appointment/${data._id}`)}
            className="border border-blue-200 rounded-b-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
            key={idx}
          >
            <img className="bg-blue-50 w-full h-88 object-cover" src={data.image} alt={data.name} />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Available</span>
              </div>
              <p className="text-gray-900 text-lg font-medium">{data.name}</p>
              <p className="text-gray-600 text-sm">{data.speciality}</p>
            </div>
          </div>
        ))}
      </div></div>
    </div>
  );
};

export default Doctor;
