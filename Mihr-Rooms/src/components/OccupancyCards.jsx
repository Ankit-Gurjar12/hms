import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import { LuBedDouble } from "react-icons/lu";
import { FaToiletPaper } from "react-icons/fa";
import { PiOvenBold  } from "react-icons/pi";

const OccupancyCard = ({ 
  hostelData = {
    hostelNumber: 'Hostel 1',
    progressPercentage: 69,
    smallInfoDetails: {
      rooms: 458,
      bathrooms: 5,
      kitchens: 15,
      totalRooms: 458,
      occupiedRooms: 58,
      floors: 3,
      totalStudents: 6582,
      inHostel: 1569,
      outsideHostel: 2500
    },
    furnitureItems: [
      { id: 1, name: "Ceiling Fan", count: 50 },
      { id: 2, name: "Center Table", count: 12 },
      { id: 3, name: "Chairs", count: 123 },
      { id: 4, name: "Refrigerator", count: 10 },
      { id: 5, name: "Kettle", count: 5 },
    ]
  }
}) => {
  return (
    <div className="transform lg:scale-[0.8] origin-left lg:-mt-[4rem] first:mt-0 lg:-ml-[4rem] w-full">
      <div className="bg-[#202020] shadow-lg rounded-2xl w-full min-h-[auto] p-4 flex flex-col gap-4">
        <h2 className="text-white text-xl font-semibold">{hostelData.hostelNumber}</h2>
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
          {/* Progress Circle */}
          <div className="w-full lg:w-1/4 flex items-center justify-center">
            <div className="w-[150px] lg:w-full max-w-[150px]">
              <CircularProgressbar
                value={hostelData.progressPercentage}
                text={`${hostelData.progressPercentage}%`}
                styles={buildStyles({
                  pathColor: '#00FFF5',
                  textColor: '#FFFFFF',
                  trailColor: '#292929',
                  strokeWidth: 10,
                })}
              />
            </div>
          </div>

          {/* Info Boxes */}
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-3 gap-4">
              {/* First Row */}
              <div className="bg-[#141414] rounded-lg flex items-center justify-center p-6">
                <LuBedDouble className="text w-12 h-10 mr-3 text-[#FF05C8] text-bold" />
                <span className="text-white text-xl">{hostelData.smallInfoDetails.rooms}</span>
              </div>
              <div className="bg-[#141414] rounded-lg flex items-center justify-center p-6">
                <FaToiletPaper  className="text w-10 h-8 mr-3 text-[#00FFA3] text-bold" />
                <span className="text-white text-xl">{hostelData.smallInfoDetails.bathrooms}</span>
              </div>
              <div className="bg-[#141414] rounded-lg flex items-center justify-center p-6">
                <PiOvenBold  className="text w-12 h-10 mr-3 text-[#FF1010] text-bold" />  
                <span className="text-white text-xl">{hostelData.smallInfoDetails.kitchens}</span>
              </div>

              {/* Second Row */}
              <div className="bg-[#141414] rounded-lg flex flex-col items-center justify-center p-6">
                <span className="text-white text-xl">Total Rooms</span>
                <span className="text-white text-xl">{hostelData.smallInfoDetails.totalRooms}</span>
              </div>
              <div className="bg-[#141414] rounded-lg flex flex-col items-center justify-center p-6">
                <span className="text-white text-xl">Occupied</span>
                <span className="text-[#FFE605] text-xl">{hostelData.smallInfoDetails.occupiedRooms}</span>
              </div>
              <div className="bg-[#141414] rounded-lg flex flex-col items-center justify-center p-6">
                <span className="text-white text-xl">Floors</span>
                <span className="text-white text-xl">{hostelData.smallInfoDetails.floors}</span>
              </div>

              {/* Bottom  Box */}
              <div className="col-span-3 bg-[#141414] rounded-lg flex justify-between items-center px-6 py-4">
                <div className="flex flex-col">
                  <span className="text-white text-xl">Students</span>
                  <span className="text-white text-xl">{hostelData.smallInfoDetails.totalStudents}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white text-xl">In Hostel</span>
                  <span className="text-[#00FFF5] text-xl">{hostelData.smallInfoDetails.inHostel}</span>
                </div>
                <div className="flex flex-col items-end ">
                  <span className="text-white text-xl">Outside Hostel</span>
                  <span className="text-white text-xl">{hostelData.smallInfoDetails.outsideHostel}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Furniture Section*/}
          <div className="w-full lg:w-1/3">
            <div className="bg-[#141414] rounded-lg p-4 h-auto lg:h-full">
              <div className="text-white text-xl font-bold mb-3">Furniture</div>
              <div className="overflow-y-auto max-h-[200px] lg:h-[calc(100%-3rem)] space-y-2 pr-2 scrollbar-hide">
                {hostelData.furnitureItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-[#202020] rounded-lg p-3"
                  >
                    <div className="text-white text-md truncate mr-2">{item.name}</div>
                    <div className="text-white text-md">{item.count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


OccupancyCard.propTypes = {
  hostelData: PropTypes.shape({
    hostelNumber: PropTypes.string.isRequired,
    progressPercentage: PropTypes.number.isRequired,
    smallInfoDetails: PropTypes.shape({
      rooms: PropTypes.number.isRequired,
      bathrooms: PropTypes.number.isRequired,
      kitchens: PropTypes.number.isRequired,
      totalRooms: PropTypes.number.isRequired,
      occupiedRooms: PropTypes.number.isRequired,
      floors: PropTypes.number.isRequired,
      totalStudents: PropTypes.number.isRequired,
      inHostel: PropTypes.number.isRequired,
      outsideHostel: PropTypes.number.isRequired,
    }).isRequired,
    furnitureItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
      })
    ).isRequired,
  }),
};


export default OccupancyCard;