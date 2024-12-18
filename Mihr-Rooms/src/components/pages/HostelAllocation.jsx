import  { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import RoomDistribution from './RoomDistribution';
import PropTypes from 'prop-types';


const HostelAllocation = ({ hostelData, onBack, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHostel, setSelectedHostel] = useState('H1');
  const [selectedFloors, setSelectedFloors] = useState([]);
  const [showRoomDistribution, setShowRoomDistribution] = useState(false);

  const hostels = ['H1', 'H2', 'H3', 'H4'];
  const totalFloors = 28;
  
  const handleFloorSelection = (floorNumber) => {
    setSelectedFloors(prev => 
      prev.includes(floorNumber)
        ? prev.filter(f => f !== floorNumber)
        : [...prev, floorNumber]
    );
  };  

  const handleProceed = () => {
    setShowRoomDistribution(true);
  };

  const handleRoomDistributionBack = () => {
    setShowRoomDistribution(false);
  };

  if (showRoomDistribution) {
    return (
      <RoomDistribution
        hostelData={hostelData}
        selectedHostel={selectedHostel}
        selectedFloors={selectedFloors}
        onBack={handleRoomDistributionBack}
        onClose={onClose}
      />
    );
  }

  return (
    <>
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
        <h1 className="text-white text-xl font-medium">Hostel Allocation</h1>
        <button className="text-white hover:opacity-80" onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-[#111111] text-white py-3 px-4 rounded-md flex items-center justify-between"
          >
            <span>{selectedHostel}</span>
            <ChevronDown className="w-5 h-5" />
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[#111111] rounded-md py-1 z-10">
              {hostels.map((hostel) => (
                <button
                  key={hostel}
                  onClick={() => {
                    setSelectedHostel(hostel);
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-white hover:bg-[#2E2E2E]"
                >
                  {hostel}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-gray-400 text-sm">Select Floors</h2>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: totalFloors }, (_, index) => (
              <button
                key={index}
                onClick={() => handleFloorSelection(index + 1)}
                className={`
                  ${selectedFloors.includes(index + 1) ? 'bg-[#00868D]' : 'bg-[#111111]'}
                  text-white rounded-md p-2 hover:bg-[#1a1a1a] transition-colors
                `}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={handleProceed}
          className="w-full bg-[#00868D] hover:bg-[#00767D] text-white py-3 rounded-md transition-colors"
        >
          Proceed
        </button>
      </div>
    </>
  );
};


HostelAllocation.propTypes = {
  hostelData: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default HostelAllocation;

