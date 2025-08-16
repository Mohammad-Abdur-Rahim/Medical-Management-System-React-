import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  //   Slot Mange State -----------------------------------------
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  // **************************************  Slot Mange State -----------------------------------------*****************************

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
      currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
      currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 10);
    } else {
      currentDate.setHours(10);
      currentDate.setMinutes(0);
    }

    const timeSlot = [];
    while (currentDate < endTime) {
      const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      timeSlot.push({ datetime: new Date(currentDate), time: formattedTime });
      currentDate.setMinutes(currentDate.getMinutes() + 30);
    }

    slotsArray.push(timeSlot);
  }

  setDocSlots(slotsArray); 
};

  //   Slot Mange State -----------------------------------------*****************************************

  useEffect(()=>{
   getAvailableSlots()
  },[docInfo])

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
      </div>
    )
  );
};

export default Appointment;
