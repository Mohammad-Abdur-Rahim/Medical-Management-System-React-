import React from 'react';
import { useContext } from 'react';
import { AppContext } from "../context/AppContext";
const MyAppointments = () => {

    const { doctors } = useContext(AppContext);
    return (
        <div>
            <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
            <div>
                {doctors.slice(0,3).map((data, idx)=>(
                    <div className='grid grid-cols-2 gap-4 sm:flex sm:gap-6 py-2 border-b' key={idx}>
                        <div>
                            <img className='w-32 bg-indigo-50' src={data.image} alt="" />
                        </div>
                        <div className='flex-1 text-sm text-zinc-600'>
                            <p className='text-neutral-800 font-semibold'>{data.name}</p>
                            <p >{data.speciality}</p>
                            <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                            <p className='text-xs '>{data.address.line1}</p>
                            <p className='text-xs '>{data.address.line2}</p>
                            <p className='text-xs mt-1'><span>Date & Time:</span>10, September, 2025 | 11:25 PM</p>
                        </div>
                        <div></div>
                        <div className='flex flex-col gap-2 justify-end'>
                            <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-[#5f6FFF] hover:text-white transition-all cursor-pointer'>Pay Online</button>
                            <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-500 hover:text-white transition-all cursor-pointer'>Cancel Appointment</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAppointments;