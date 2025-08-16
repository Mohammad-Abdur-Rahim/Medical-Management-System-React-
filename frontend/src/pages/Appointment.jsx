import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  //   Slot Mange State -----------------------------------------
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  // **************************************  Slot Mange State -----------------------------------------*****************************
  const dayOfWeeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  useEffect(() => {
    const fetchDocInfo = () => {
      const dInfo = doctors.find((doc) => doc._id === docId);
      setDocInfo(dInfo);
      console.log(dInfo);
    };

    fetchDocInfo();
  }, [doctors, docId]);
  // ****************************************  Slot Mange Fn -----------------------------------------
  const getAvailableSlots = () => {
    const slotsArray = [];
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 10);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const timeSlot = [];
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlot.push({ datetime: new Date(currentDate), time: formattedTime });
        currentDate.setMinutes(currentDate.getMinutes() + 60);
      }

      slotsArray.push(timeSlot);
    }

    setDocSlots(slotsArray);
  };

  //   Slot Mange State -----------------------------------------*****************************************

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  //   Slot Mange Fn -----------------------------------------**************************************************

  return (
    docInfo && (
      <div>
        {/* ---------------------Doctors Details Show ---------------- */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-[#5f6FFF] w-full sm:max-w-72  rounded-lg "
              src={docInfo.image}
              alt="tufyif"
            />
          </div>
          {/* right div doc details---------------------------------------------- */}
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>

            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <p className="flex item-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment Fee :{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>{" "}
              Dollar
            </p>
          </div>
        </div>
        {/* Booking Slots --------------- */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full  mt-4">
            {docSlots.length &&
              docSlots.map((data, index) => (
                <div onClick={()=> setSlotIndex(index)} className={`flex flex-col justify-center items-center 
              w-16 h-16 rounded-full cursor-pointer overflow-hidden  ${slotIndex === index ? 'bg-[#5f6FFF] text-white' : 'border border-gray-200'} `} key={index}>
                  <p className="text-[11px] font-medium truncate w-full text-center">{data[0] && dayOfWeeks[data[0].datetime.getDay()]}</p>
                  <p className="text-sm font-semibold">{data[0] && data[0].datetime.getDate()}</p>
                </div>
              ))}
            {/* {docSlots.length > 0 &&   --------------------------------When Need show same date
              docSlots.map((data, index) => {
                const dateObj =
                  data.length > 0
                    ? data[0].datetime
                    : new Date(
                        new Date().setDate(new Date().getDate() + index)
                      );
                return (
                  <div
                    onClick={() => setSlotIndex(index)}
                    className={`flex flex-col justify-center items-center 
          w-16 h-16 rounded-full cursor-pointer overflow-hidden  
          ${
            slotIndex === index
              ? "bg-[#5f6FFF] text-white"
              : "border border-gray-200"
          } `}
                    key={index}
                  >
                    <p className="text-[11px] font-medium truncate w-full text-center">
                      {dayOfWeeks[dateObj.getDay()]}
                    </p>
                    <p className="text-sm font-semibold">{dateObj.getDate()}</p>
                  </div>
                );
              })} */}
          </div>
           {/* time section Appointment----------------- */}
              <div className="flex items-center gap-3 w-full  mt-4">
              {
                docSlots.length && docSlots[slotIndex].map((data,index)=>(
                  <p onClick={()=> setSlotTime(data.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${data.time === slotTime ? 'bg-[#5f6FFF] text-white': 'border border-gray-300 text-gray-400' }`} key={index}>
                    {
                      data.time.toLowerCase()
                    }
                  </p>
                ))
              }
              </div>
              <button className="bg-[#5f6FFF] text-sm text-white font-light px-14 py-3 rounded-full my-6 cursor-pointer">
                Book an appointment
              </button>
        </div>
        {/* Related Doctors List Components  */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
