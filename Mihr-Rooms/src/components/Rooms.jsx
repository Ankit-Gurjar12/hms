import { RiSearch2Line } from 'react-icons/ri';
import MetricsDashboard from '../reusable/MetricsDashboard';
import RoomForm from './pages/Roomform';
import { useState } from 'react';
import RoomCard from '../reusable/RoomCard';

export default function Rooms() {
  const [showRoomForm, setShowRoomForm] = useState(false);

  const handleAddRoomClick = () => {
    setShowRoomForm(true);
  };

  const handleCloseRoomForm = () => {
    setShowRoomForm(false);
  };

  return (
    <>
      <div className="relative w-full">
        {/* Search Icon */}
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <RiSearch2Line size={20} />
          </div>
        {/* Input Field */}
          <input
            type="text"
            placeholder="Search..."
            className="w-1/3 bg-gray-800 text-white placeholder-gray-500 pl-10 py-2.5 pr-4 rounded-lg focus:outline-none "
          />
      </div>

      {/* TOTAL HOSTELS AND ADD HOSTELS */}
        <div className="flex flex-col gap-4 mt-4 sm:flex-row">
          {/* Total Hostels */}
          <div className="flex items-center justify-between w-48 max-w-sm bg-[#191919] px-4 py-3 rounded-md">
            <span className="text-gray-200">Total Rooms</span>
            <span className="text-gray-200 font-semibold">456</span>
          </div>

        {/* Add Hostels */}
          <div className="flex justify-center items-center w-48 max-w-sm bg-[#00868D] px-4 py-3 rounded-md">
            <button onClick={handleAddRoomClick} className="text-gray-200 text-center">+ Add Rooms</button>
          </div>
      </div>

      {/* Output containers */}
        <div className='w-2/3'>
          <MetricsDashboard className=' ' /> 
        </div>

      {/* Modal for RoomForm*/}
        {showRoomForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            {/* Modal Content */}
            <RoomForm onClose={handleCloseRoomForm} />
          </div>
        )}


      {/* Room Card Section */}
        <div className="flex flex-col items-center gap-6 mt-4 -ml-64 ">
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
    </>
  );
}
