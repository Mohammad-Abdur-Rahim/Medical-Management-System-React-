import React from 'react';
import { specialityData } from '../assets/assets_frontend/assets';
import { Link } from 'react-router-dom';

const SpecialitySection = () => {
    return (
        <div className=' flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
            <h2 className='text-3xl font-medium text-[#1F2937]'>Find By Speciality</h2>
            <p className='sm:1/3 text-center text-sm text-[#4B5563] '>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            {/* Specialtity Section------------Assets folder------------------------------------------ */}
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {
                specialityData.map((data,idx)=>(
                    <Link onClick={()=>scrollTo(0,0)} className='flex flex-col item-center text-xs cursor-pointer  hover:translate-y-[-10px] transition-all duration-500' key={idx} to={`/doctors/${data.speciality}`}>
                        <img className='w-16 sm:w-24 mb-2' src={data.image} alt="imgdata" />
                        <p>{data.speciality}</p>
                    </Link>
                ))
            }
            </div>
        </div>
    );
};

export default SpecialitySection;