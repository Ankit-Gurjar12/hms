import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";
import HostelAllocation from "./HostelAllocation";
import PropTypes from "prop-types";


const fetchInitialData = async () => {
  console.log("Fetching initial data from backend");
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { 
    success: true, 
    data: {
      name: "",
      occupancy: "",
      rentAmount: "",
      perMonth: "",
    }
  };
};

export default function RoomForm({ onClose }) {
  const navigate = useNavigate();
  const [hostelData, setHostelData] = useState({
    name: "",
    occupancy: "",
    rentAmount: "",
    perMonth: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showHostelAllocation, setShowHostelAllocation] = useState(false);

  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchInitialData();
        if (result.success) {
          setHostelData(result.data);
        } else {
          setError("Failed to load initial data");
        }
      } catch (error) {
        setError("Error loading initial data");
        console.error("Error loading initial data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  const handleChange = (e) => {
    setHostelData({
      ...hostelData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowHostelAllocation(true);
  };


  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate(-1);
    }
  };

  if (isLoading) {
    return <div className="text-white"></div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="bg-[#2E2E2E] px-4 sm:px-6 py-4 w-full max-w-[430px] min-h-[325px] rounded-lg mx-auto">
      {!showHostelAllocation ? (
        <>
          <div className="flex justify-between items-center mb-4">
            <IoIosArrowBack className="invert cursor-pointer" onClick={handleClose} />
            <h2 className="text-lg text-white">Add Rooms</h2>
            <RxCross1 className="text-white cursor-pointer" onClick={handleClose} />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={hostelData.name}
                onChange={handleChange}
                placeholder="Name of Room"
                className="w-full text-xs px-4 py-2.5 bg-[#111111] text-[#B0B0B0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />
            </div>

            <div className="space-y-3">
              <input
                type="text"
                name="occupancy"
                value={hostelData.occupancy}
                onChange={handleChange}
                placeholder="Occupancy"
                className="w-full text-xs px-4 py-2.5 bg-[#111111] text-[#B0B0B0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  name="rentAmount"
                  value={hostelData.rentAmount}
                  onChange={handleChange}
                  placeholder="Rent Amount/Guest"
                  className="w-full sm:w-3/4 text-xs px-4 py-2.5 bg-[#111111] text-[#B0B0B0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                />
                <input
                  type="text"
                  name="perMonth"
                  value={hostelData.perMonth}
                  onChange={handleChange}
                  placeholder="Per Month"
                  className="w-full sm:w-1/4 text-xs px-4 py-2.5 bg-[#111111] text-[#B0B0B0] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                />
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#2E2E2E] border border-[#3F3F3F] hover:bg-[#00868D] text-white font-bold px-10 py-2.5 rounded-md w-full sm:w-auto"
              >
                Proceed
              </button>
            </div>
          </form>
        </>
      ) : (
        <HostelAllocation
          hostelData={hostelData}
          onBack={() => setShowHostelAllocation(false)}
          onClose={handleClose}
        />
      )}
    </div>
  );
}

// Prop validation
RoomForm.propTypes = {
  onClose: PropTypes.func, 
};
