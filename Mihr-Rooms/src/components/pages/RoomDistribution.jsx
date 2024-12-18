import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import PropTypes from 'prop-types';
import FurnitureManagement from './FurnitureManagement';

// backend API
const fetchRoomDistribution = async () => {
  //  API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // backend data
  return {
    totalRooms: 456,
    floors: [
      { floor: 1, rooms: 114 },
      { floor: 2, rooms: 114 },
      { floor: 3, rooms: 114 },
      { floor: 4, rooms: 114 },
    ]
  };
};

const RoomDistribution = ({ hostelData, selectedHostel, selectedFloors, onBack, onClose }) => {
  const [roomData, setRoomData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFurnitureManagement, setShowFurnitureManagement] = useState(false);


  useEffect(() => {
    const loadRoomData = async () => {
      try {
        const data = await fetchRoomDistribution();
        setRoomData(data);
      } catch (e) {
        setError('Failed to load room distribution data',e);
      } finally {
        setIsLoading(false);
      }
    };

    loadRoomData();
  }, []);

  const handleProceed = () => {
    setShowFurnitureManagement(true);
  };

  const handleFurnitureManagementBack = () => {
    setShowFurnitureManagement(false);
  };

  if (isLoading) {
    return <div className="text-white text-center"></div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (showFurnitureManagement) {
    return (
      <FurnitureManagement
        hostelData={hostelData}
        selectedHostel={selectedHostel}
        selectedFloors={selectedFloors}
        roomDistribution={roomData}
        onBack={handleFurnitureManagementBack}
        onClose={onClose}
      />
    );
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button className="text-white hover:opacity-80" onClick={onBack}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-white text-2xl font-medium">Room Distribution</h1>
        </div>
        <button className="text-white hover:opacity-80" onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-6">
        {/* Total Rooms */}
        <div className="text-white text-lg mb-6">
          Total Rooms : {roomData.totalRooms}
        </div>

        {/* Column Headers */}
        <div className="grid grid-cols-2 gap-4 mb-2">
          <div className="text-gray-400">Floor Number</div>
          <div className="text-gray-400">Number of Rooms</div>
        </div>

        {/* Floor Rows */}
        <div className="space-y-3">
          {roomData.floors.map(({ floor, rooms }) => (
            <div key={floor} className="grid grid-cols-2 gap-4">
              <div className="bg-[#111111] text-white py-2 px-4 rounded-md text-center">
                {floor}
              </div>
              <div className="bg-[#111111] text-white py-2 px-4 rounded-md text-center">
                {rooms}
              </div>
            </div>
          ))}
        </div>

        {/* Proceed Button */}
        <button 
          onClick={handleProceed}
          className="w-full bg-[#00868D] hover:bg-[#00767D] text-white py-3 rounded-md transition-colors mt-8"
        >
          Proceed
        </button>
      </div>
    </>
  );
};

// Prop validation
RoomDistribution.propTypes = {
  hostelData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    occupancy: PropTypes.number.isRequired,
  }).isRequired,
  selectedHostel: PropTypes.string.isRequired,
  selectedFloors: PropTypes.arrayOf(PropTypes.number).isRequired,
  onBack: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};


export default RoomDistribution;

