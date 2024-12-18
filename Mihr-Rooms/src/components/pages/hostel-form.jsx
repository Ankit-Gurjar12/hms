import  { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import PropTypes from 'prop-types';

export function HostelForm({ onClose }) {
  const [hostelData, setHostelData] = useState({
    name: "",
    floorNumber: "",
    numberOfKitchen: "",
    numberOfWashroom: "",
    addressLine1: "",
    addressLine2: "",
    pincode: "",
    district: "",
    state: "",
    country: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    setHostelData({
      ...hostelData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleAddHostel = async () => {
    try {
      //API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Hostel added successfully:", hostelData);
      onClose(); // Close after successful 
    } catch (error) {
      console.error("Error adding hostel:", error);
    }
  };

  const handleBack = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#2E2E2E] p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg text-white font-semibold">
            {showConfirmation ? "Confirm Hostel Details" : "Add Hostel"}
          </h2>
          <RxCross1 
            onClick={onClose}
            className="text-white cursor-pointer hover:text-gray-300 transition-colors" 
          />
        </div>
        {/*Form initiation */}
        {!showConfirmation ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={hostelData.name}
              onChange={handleChange}
              placeholder="Name of Hostel"
              className="w-full text-sm px-4 py-2 bg-[#111111] text-[#B0B0B0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="floorNumber"
                value={hostelData.floorNumber}
                onChange={handleChange}
                placeholder="Number of Floors"
                className="w-full text-sm px-4 py-2 bg-[#111111] text-[#B0B0B0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />
              <input
                type="text"
                name="numberOfKitchen"
                value={hostelData.numberOfKitchen}
                onChange={handleChange}
                placeholder="Number of Kitchens"
                className="w-full text-sm px-4 py-2 bg-[#111111] text-[#B0B0B0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />
            </div>

            <input
              type="text"
              name="numberOfWashroom"
              value={hostelData.numberOfWashroom}
              onChange={handleChange}
              placeholder="Number of Washrooms"
              className="w-full text-sm px-4 py-2 bg-[#111111] text-[#B0B0B0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
            />

            <h3 className="text-base text-white font-medium">Residential Address</h3>

            <input
              type="text"
              name="addressLine1"
              value={hostelData.addressLine1}
              onChange={handleChange}
              placeholder="Address Line 1"
              className="w-full text-sm px-4 py-2 bg-[#111111] text-[#B0B0B0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
            />

            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                name="addressLine2"
                value={hostelData.addressLine2}
                onChange={handleChange}
                placeholder="Address Line 2"
                className="col-span-2 w-full text-sm px-4 py-2 bg-[#111111] text-[#B0B0B0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />
              <input
                type="text"
                name="pincode"
                value={hostelData.pincode}
                onChange={handleChange}
                placeholder="Pin Code"
                className="w-full text-sm px-4 py-2 bg-[#111111] text-[#B0B0B0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                name="district"
                value={hostelData.district}
                onChange={handleChange}
                placeholder="District"
                className="w-full text-sm px-4 py-2 bg-[#111111] text-[#B0B0B0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />
              <input
                type="text"
                name="state"
                value={hostelData.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full text-sm px-4 py-2 bg-[#111111] text-[#B0B0B0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />
              <input
                type="text"
                name="country"
                value={hostelData.country}
                onChange={handleChange}
                placeholder="Country"
                className="w-full text-sm px-4 py-2 bg-[#111111] text-[#B0B0B0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#2E2E2E] border border-[#3F3F3F] hover:bg-[#00868D] text-white font-bold px-10 py-2.5 rounded transition-colors duration-300"
              >
                Proceed
              </button>
            </div>
          </form>
        ) : ( 
          <div className="space-y-6">
            {/*Confirmation Form */}  
            <div>
              <h2 className="text-white text-lg mb-2">Name of Hostel : {hostelData.name}</h2>
              <div className="space-y-2 text-[#B0B0B0]">
                <p>Number of Floors : {hostelData.floorNumber}</p>
                <p>Number of Kitchens/Cafeterias : {hostelData.numberOfKitchen}</p>
                <p>Number of Washrooms : {hostelData.numberOfWashroom}</p>
              </div>
            </div>

            <div>
              <h2 className="text-white text-lg mb-2">Hostel Address</h2>
              <p className="text-[#B0B0B0]">
                {hostelData.addressLine1}
                {hostelData.addressLine2 && `, ${hostelData.addressLine2}`}
                <br />
                {hostelData.district} - {hostelData.state} - {hostelData.pincode} {hostelData.country}
              </p>
            </div>

            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={handleAddHostel}
                className="bg-[#00868D] text-white px-8 py-2 rounded-md hover:bg-[#006D73] transition-colors"
              >
                Add Hostel
              </button>
              <button
                onClick={handleBack}
                className="bg-[#3F3F3F] text-white px-8 py-2 rounded-md hover:bg-[#4F4F4F] transition-colors"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

HostelForm.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default HostelForm;

