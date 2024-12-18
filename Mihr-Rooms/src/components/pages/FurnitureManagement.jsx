import { useState } from 'react';
import { ChevronDown, Plus, X } from 'lucide-react';
import PropTypes from 'prop-types';
import PreviewConfirmation from './PreviewConfirmation';

const FurnitureManagement = ({ hostelData, selectedHostel, selectedFloors, roomDistribution, onBack, onClose }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedFurniture, setSelectedFurniture] = useState('');
  const [quantity, setQuantity] = useState('114');
  const [items, setItems] = useState([]);
  const [showPreviewConfirmation, setShowPreviewConfirmation] = useState(false);

  // furniture  - can be replaced with API data
  const furnitureOptions = [
    'Bed',
    'Chair',
    'Table',
    'Desk',
    'Wardrobe',
    'Shelf'
  ];

  const handleAddItem = () => {
    if (selectedFurniture && quantity) {
      setItems([...items, { furniture: selectedFurniture, quantity }]);
      setSelectedFurniture('');
      setQuantity('114');
    }
  };

  const handleProceed = () => {
    setShowPreviewConfirmation(true);
  };

  const handlePreviewConfirmationBack = () => {
    setShowPreviewConfirmation(false);
  };

  if (showPreviewConfirmation) {
    return (
      <PreviewConfirmation
        hostelData={hostelData}
        selectedHostel={selectedHostel}
        selectedFloors={selectedFloors}
        roomDistribution={roomDistribution}
        furniture={items}
        onBack={handlePreviewConfirmationBack}
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
        <h1 className="text-white text-xl font-medium">Furniture Management</h1>
        <button className="text-white hover:opacity-80" onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-6">
        {/* Input Fields */}
        <div className="space-y-2">
          <div className="grid grid-cols-[1fr_auto_auto] gap-2">
            <div className="space-y-1">
              <label className="text-gray-400 text-sm">Item</label>
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full bg-[#111111] text-white py-2 px-4 rounded-md flex items-center justify-between"
                >
                  <span className="text-gray-400">
                    {selectedFurniture || 'Select Furniture'}
                  </span>
                  <ChevronDown className="w-5 h-5" />
                </button>
                {isOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-[#111111] rounded-md py-1 z-10">
                    {furnitureOptions.map((furniture) => (
                      <button
                        key={furniture}
                        onClick={() => {
                          setSelectedFurniture(furniture);
                          setIsOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-white hover:bg-[#2E2E2E]"
                      >
                        {furniture}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-1 mt-6">
              <label className="text-gray-400 text-sm">Qty / Room</label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-24 bg-[#111111] text-white py-2 px-4 rounded-md"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleAddItem}
                className="bg-[#00868D] hover:bg-[#00767D] text-white p-2 rounded-md transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 min-h-[200px]">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 px-4 bg-[#111111] rounded-md mb-2"
            >
              <span className="text-white">{item.furniture}</span>
              <span className="text-white">{item.quantity}</span>
            </div>
          ))}
        </div>

        {/* Proceed Button */}
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


// PropTypes validation
FurnitureManagement.propTypes = {
  hostelData: PropTypes.object.isRequired,
  selectedHostel: PropTypes.string.isRequired,
  selectedFloors: PropTypes.arrayOf(PropTypes.string).isRequired,
  roomDistribution: PropTypes.arrayOf(
    PropTypes.shape({
      floor: PropTypes.string.isRequired,
      rooms: PropTypes.number.isRequired,
    })
  ).isRequired,
  onBack: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};



export default FurnitureManagement;

