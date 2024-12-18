import { RiEdit2Line, RiBuilding2Line} from "react-icons/ri";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { RiShareBoxFill } from 'react-icons/ri';

// Registering the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [25, 25, 50],
      backgroundColor: ['#FF05C8', '#00FFF5', '#FFE605'],
      borderWidth: 0,
    }
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    }
  },
  cutout: '66%',
};

const RoomCard = () => {
  const furnitureList = [
    { name: 'Cieling Fan', count: 50 },
    { name: 'Centre Table', count: 30 },
    { name: 'Chairs', count: 40 },
    { name: 'Refrigerator', count: 20 },
    { name: 'Sofa', count: 15 },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto bg-[#202020] rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-4 md:p-6">
          {/* Title and Edit Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <RiBuilding2Line className="text-white text-xl" />
              <h1 className="text-white font-semibold text-lg">6 Bedded Bunker</h1>
            </div>
            <button className="flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-[#202020] border border-[#3E3E3E] rounded text-white text-xs sm:text-sm">
              <RiEdit2Line className="text-white text-sm mr-1" />
              Edit
            </button>
          </div>

          {/* Details Boxes */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-[#111111] rounded-lg p-2 sm:p-4 text-white">
              <p className="text-xs sm:text-sm">Total Rooms</p>
              <p className="text-base sm:text-lg font-semibold">125</p>
            </div>
            <div className="bg-[#111111] rounded-lg p-2 sm:p-4 text-white">
              <p className="text-xs sm:text-sm">Rent Per Tenant</p>
              <p className="text-base sm:text-lg font-semibold">₹ 50,000</p>
            </div>
            <div className="bg-[#111111] rounded-lg p-2 sm:p-4 text-white">
              <p className="text-xs sm:text-sm">Tenants</p>
              <p className="text-base sm:text-lg font-semibold">658</p>
            </div>
            <div className="bg-[#111111] rounded-lg p-2 sm:p-4 text-white">
              <p className="text-xs sm:text-sm">Furniture</p>
              <p className="text-base sm:text-lg font-semibold">125</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative">
            <p className="text-white text-xs sm:text-sm font-medium mb-2">Distribution</p>
            <div className="h-2 sm:h-3 w-full bg-[#111111] rounded-lg relative">
              <div className="absolute h-full bg-[#CE1A1A] rounded-l-lg" style={{ width: '20%' }}></div>
              <div className="absolute h-full bg-[#9747FF]" style={{ left: '20%', width: '5%' }}></div>
              <div className="absolute h-full bg-[#00FFA3]" style={{ left: '25%', width: '10%' }}></div>
              <div className="absolute h-full bg-[#FFE605]" style={{ left: '35%', width: '10%' }}></div>
              <div className="absolute h-full bg-[#0094FF] rounded-r-lg" style={{ left: '45%', width: '55%' }}></div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-4 md:p-6 bg-[#202020] rounded-lg md:rounded-none">
          {/* Small Boxes */}
          <div className="flex justify-start space-x-2 mb-4">
            {['H1', '07', '07', '06'].map((text, index) => (
              <div
                key={index}
                className="w-12 h-8 bg-[#111111] rounded-[7px] flex items-center justify-center text-white text-xs font-medium"
              >
              {text}
              </div>
            ))}
          </div>

          {/* Content Container */}
          <div className="flex flex-col sm:flex-row bg-[#111111] rounded-lg h-64">
            {/* Left Side: Doughnut Chart */}
            <div className="w-full sm:w-1/3 p-2 sm:p-4 relative">
              <p className="text-white text-sm sm:text-lg font-semibold mb-2">Collection</p>
              <div className="w-full h-32 sm:h-40 relative">
                <Doughnut data={data} options={options} height={120} />
                <div className="absolute inset-0 flex justify-center items-center">
                  <p className="text-white font-semibold text-base sm:text-xl">25%</p>
                </div>
              </div>
            </div>

            {/* Right Side: Financial Details */}
            <div className="w-full sm:w-2/3 grid grid-cols-2 gap-2 p-2 sm:p-4">
              <div className="rounded-lg p-2 text-white text-xs sm:text-sm font-medium">
                Expected
                <p className="text-xs sm:text-sm font-medium mt-1">₹ 6,58,000</p>
              </div>
              <div className="rounded-lg p-2 text-white text-xs sm:text-sm font-medium">
                Collected
                <p className="text-xs sm:text-sm font-medium mt-1 text-[#00FFF5]">₹ 1,54,500</p>
              </div>
              <div className="rounded-lg p-2 text-white text-xs sm:text-sm font-medium">
                Due
                <p className="text-xs sm:text-sm font-medium mt-1 text-[#FFE605]">₹ 3,00,000</p>
              </div>
              <div className="rounded-lg p-2 text-white text-xs sm:text-sm font-medium">
                Overdue
                <p className="text-xs sm:text-sm font-medium mt-1 text-[#FF05C8]">₹ 2,04,000</p>
              </div>
            </div>
          </div>
        </div>

      {/* Blue Division */}
      <div className="w-2/6  p-6 relative">
        <div
          style={{
            position: 'absolute',
            width: '90%',
            height: '94%',
            left: '5%',
            top: '4.5%',
            background: '#111111',
            borderRadius: '10px',
            zIndex: 0,
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-lg font-semibold flex items-center space-x-2">
                <span>Furniture</span>
                <RiShareBoxFill className="text-white text-lg ml-2" />
              </h2>
            </div>

            {/* Scrollable Furniture List */}
            <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-[#2E2E2E] scrollbar-track-[#111111] scrollbar-hide">
              <ul className="space-y-2">
                {furnitureList.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between bg-[#1E1E1E] rounded-lg p-2 text-white text-sm"
                  >
                    <span>{item.name}</span>
                    <div className="flex items-center space-x-2">
                      <span>{item.count}</span>
                      <button className="text-white text-sm">{">"}</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default RoomCard;