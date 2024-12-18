import { X } from 'lucide-react';
import PropTypes from 'prop-types';

const PreviewConfirmation = ({ hostelData, selectedHostel, roomDistribution, furniture, onBack, onClose }) => {
  const previewData = {
    roomName: hostelData?.name,
    occupancy: hostelData?.occupancy,
    numberOfRooms: roomDistribution?.totalRooms,
    hostel: selectedHostel,
    roomDistribution: roomDistribution?.floors || [],
    furniture: furniture || []
  };

  const handleProceed = async () => {
    try {
      //  API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Sending data to backend:', previewData);
      // backend 
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button 
          className="text-white hover:opacity-80"
          onClick={onBack}
        >
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
        <h1 className="text-white text-xl font-medium">Preview</h1>
        <button className="text-white hover:opacity-80" onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-gray-400 text-sm">Name of Room</h2>
          <p className="text-white text-lg">{previewData.roomName}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-gray-400 text-sm">Occupancy</h2>
          <p className="text-white text-lg">{previewData.occupancy}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-gray-400 text-sm">Number of Rooms</h2>
          <p className="text-white text-lg">{previewData.numberOfRooms}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-gray-400 text-sm">Hostel</h2>
          <p className="text-white text-lg">{previewData.hostel}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-gray-400 text-sm">Room Distribution</h2>
          <div className="space-y-1">
            {previewData.roomDistribution.map(({ floor, rooms }) => (
              <p key={floor} className="text-white">
                Floor {floor} = {rooms} Rooms
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-gray-400 text-sm">Furniture</h2>
          <div className="space-y-1">
            {previewData.furniture.map(({ furniture, quantity }, index) => (
              <p key={index} className="text-white">
                {furniture} = {quantity} Quantity/Room
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Proceed Button */}
      <button
        onClick={handleProceed}
        className="w-full bg-[#00868D] hover:bg-[#00767D] text-white py-3 rounded-md transition-colors mt-8"
      >
        Proceed
      </button>
    </>
  );
};

// Prop validation
PreviewConfirmation.propTypes = {
  hostelData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    occupancy: PropTypes.number.isRequired,
  }).isRequired,
  selectedHostel: PropTypes.string.isRequired,
  selectedFloors: PropTypes.arrayOf(PropTypes.number).isRequired,
  roomDistribution: PropTypes.shape({
    totalRooms: PropTypes.number.isRequired,
    floors: PropTypes.arrayOf(
      PropTypes.shape({
        floor: PropTypes.number.isRequired,
        rooms: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  furniture: PropTypes.arrayOf(
    PropTypes.shape({
      furniture: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onBack: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};


export default PreviewConfirmation;

