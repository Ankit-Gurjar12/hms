import { RiSearch2Line } from 'react-icons/ri';
import  HostelForm  from "./pages/hostel-form.jsx";
import { useState } from 'react';
import HostelCard from '../reusable/hostel_Card.jsx';



export default function Hostels() {
  const [showForm, setShowForm] = useState(false);

  // Data for the HostelCard
  const hostelData = {
    id: 1,
    name: "Hostel 1",
    address: {
      plot: "Plot number 206, Tihri Nagar,",
      street: "Main Hawal Sadak",
      location: "Jaipur - Rajasthan - 302021 India"
    },
    progressPercentage: 50,
    stats: {
      totalRooms: 458,
      occupied: 58,
      floors: 3,
      students: 6582,
      inHostel: 1569,
      outsideHostel: 2500
    },
    collection: {
      percentage: 25,
    },
    furniture: [
      { id: 1, name: "Ceiling Fan", count: "50" },
      { id: 2, name: "Center Table", count: "12" },
      { id: 3, name: "Chairs", count: "123" },
      { id: 4, name: "Refrigerator", count: "06" }
    ],
    finances: {
      expected: "15,65,852",
      collected: "3,91,463",
      remaining: "7,51,608",
      overdue: "4,85,414.12"
    }
  };
  

  return (  
    <>
      {/* Search Bar */}
      <div className="relative w-full py-3">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <RiSearch2Line size={20} />
        </div>
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md bg-gray-800 text-white placeholder-gray-500 pl-10 py-2.5 pr-4 rounded-lg focus:outline-none sm:w-2/3 md:w-1/2 lg:w-1/3"
        />
      </div>

      {/* TOTAL HOSTELS AND ADD HOSTELS */}
      <div className="flex flex-col gap-4 mt-4 sm:flex-row">
        {/* Total Hostels */}
        <div className="flex items-center justify-between w-48 max-w-sm bg-[#191919] px-4 py-3 rounded-md">
          <span className="text-gray-200">Total Hostels</span>
          <span className="text-gray-200 font-semibold">4</span>
        </div>

        {/* Add Hostels */}
        <div className="flex justify-center items-center w-48 max-w-sm bg-[#00868D] px-4 py-3 rounded-md">
          <button  onClick={() => setShowForm(true)} className="text-gray-200 text-center">+ Add Hostels</button>
        </div>
      </div>

      {showForm && (
        <HostelForm onClose={() => setShowForm(false)} />
      )}


      {/* Hostel Cards Grid*/}
      <div className="mt-6 space-y-6">
        <HostelCard data={hostelData} />
        <HostelCard data={hostelData}/>
        <HostelCard data={hostelData}/>
      </div>
    </>
  );
}
