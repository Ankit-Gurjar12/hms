import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RiExternalLinkLine } from 'react-icons/ri';
import { LuBedDouble } from "react-icons/lu";
import { FaToiletPaper } from "react-icons/fa";
import { PiOvenBold  } from "react-icons/pi";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types';

// Registering the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const HostelCard = ({ data }) => {


  const cdata = {
    datasets: [
      {
        data: [25, 25, 50],
        backgroundColor: ['#FF05C8', '#00FFF5', '#FFE605'],
        borderWidth: 0, 
      }
    ],
  };
  
  return (
    <div className="bg-[#202020] rounded-2xl p-6 w-full text-white">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="w-full lg:w-1/4 space-y-4">
          <div className="space-y-1">
            <h2 className="text-lg font-medium flex items-center gap-2">
              {data.name}
              <RiExternalLinkLine className="w-4 h-4" />
            </h2>
            <p className="text-sm text-gray-400">{data.address.plot}</p>
            <p className="text-sm text-gray-400">{data.address.street}</p>
            <p className="text-sm text-gray-400">{data.address.location}</p>
          </div>
          
          <div className="w-48 h-48 mx-auto">
            <CircularProgressbar
              value={data.progressPercentage}
              text={`${data.progressPercentage}%`}
              styles={buildStyles({
                pathColor: "#00FFF5",
                textColor: "#FFFFFF",
                trailColor: "#292929",
                strokeLinecap: "round",
                strokeWidth: 12
              })}
            />
            <button className="w-full bg-[#00868D] py-2.5 rounded-xl text-white hover:bg-opacity-90 transition-colors mt-8">
            + Add Room
          </button>
          </div>

          
        </div>

        {/* Center Section */}
        <div className="flex-1 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 ">
            <div className="bg-[#141414] p-5 rounded-xl">
              <div className="flex items-center gap-3">
              
                <div className="text-[#FF4085]">
                <LuBedDouble className="text-[#FF05C8] text-bold  w-10 h-8 mr-3" />
                </div>
                <div>
                  
                  <div className="text-xl font-medium">{data.stats.totalRooms}</div>
                </div>
              </div>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="text-[#00FFF5]">
                <FaToiletPaper className="text-[#00FFA3] text-bold w-10 h-8 mr-3" />
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
              
                </div>
                <div>
                  <div className="text-xl font-medium text-[#FFE605]">{data.stats.occupied}</div>
                </div>
              </div>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div>
                <PiOvenBold className="text-[#FF1010] text-bold w-10 h-8 mr-3" />
                </div>
                <div>
                  
                  <div className="text-xl font-medium">{data.stats.floors}</div>
                </div>
              </div>
            </div>
          </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#141414] p-4 rounded-xl">
              <div className="flex items-center gap-3">
                
                <div>
                  <div className="text-sm text-gray-400">Total Rooms</div>
                  <div className="text-xl font-medium">{data.stats.totalRooms}</div>
                </div>
              </div>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-sm text-gray-400">Occupied</div>
                  <div className="text-xl font-medium text-[#FFE605]">{data.stats.occupied}</div>
                </div>
              </div>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-sm text-gray-400">Floors</div>
                  <div className="text-xl font-medium">{data.stats.floors}</div>
                </div>
              </div>
            </div>
          </div>
          

          {/* Students Stats */}
          <div className="bg-[#141414] p-4 rounded-xl flex justify-between">
            <div className="text-center">
              <div className="text-xl font-medium">{data.stats.students}</div>
              
              <div className="text-sm text-gray-400">Students</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-medium text-[#00FFF5]">{data.stats.inHostel}</div>
              <div className="text-sm text-gray-400">In Hostel</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-medium">{data.stats.outsideHostel}</div>
              <div className="text-sm text-gray-400">Outside Hostel</div>
            </div>
          </div>
          
        </div>
        

        {/* Right Section */}
        <div className="w-full lg:w-1/4  space-y-4">
         {/* Collection Chart */}
<div className="bg-[#141414] lg:h-full p-4 rounded-xl">
  <h3 className="mb-6 text-center">Collection</h3>
  <div className="w-full h-48 mx-auto flex justify-center items-center">
    {/* Chart.js Doughnut Chart with Percentage */}
    <Doughnut
      data={cdata}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, 
          },
        },
        cutout: "70%", 
      }}
      plugins={[
        {
          id: "centerText",
          beforeDraw: (chart) => {
            const { width } = chart;
            const { height } = chart;
            const { ctx } = chart;
            const dataSum = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
            const percentage = Math.round(
              (chart.data.datasets[0].data[0] / dataSum) * 100
            );

            ctx.save();
            ctx.font = "bold 20px Arial";
            ctx.fillStyle = "#FFFFFF"; 
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(`${percentage}%`, width / 2, height / 2);
            ctx.restore();
          },
        },
      ]}
    />
  </div>
</div>



              
          
      </div>
      {/* Furniture List */}
      <div className="bg-[#141414] lg:w-56 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3>Furniture</h3>
              <RiExternalLinkLine className="w-4 h-4" />
            </div>
            <div className="space-y-2 ">
              {data.furniture.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-[#202020] rounded-lg ">
                  <span className="mb-4 ml-2 mt-2 text-center">{item.name}</span>
                  <span className="mr-2 mb-1">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        {/* Bottom Section - Money Dashboard */}
<div className="max-w-screen lg:w-3/4 mt-2 ml-auto ">
  <div className=" max-w-screen-xl mt-2 ml-auto grid grid-cols-4 rounded-lg">
  <div className="bg-[#141414] p-4">
  <div className="text-sm text-gray-400">Expected</div>
    <div className="text-xl font-medium">₹ {data.finances.expected}</div>
    
  </div>
  <div className="bg-[#141414] p-4">
  <div className="text-sm text-gray-400">Collected</div>
    <div className="text-xl font-medium text-[#00FFF5]">₹ {data.finances.collected}</div>
    
  </div>
  <div className="bg-[#141414] p-4">
  <div className="text-sm text-gray-400">Remaining</div>
    <div className="text-xl font-medium text-[#FFE605]">₹ {data.finances.remaining}</div>
    
  </div>
  <div className="bg-[#141414] p-4">
  <div className="text-sm text-gray-400">Overdue</div>
    <div className="text-xl font-medium text-[#FF4085]">₹ {data.finances.overdue}</div>
    
  </div>

  </div>

</div>
    </div>


  );
};


HostelCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      plot: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    }).isRequired,
    progressPercentage: PropTypes.number.isRequired,
    stats: PropTypes.shape({
      totalRooms: PropTypes.number.isRequired,
      occupied: PropTypes.number.isRequired,
      floors: PropTypes.number.isRequired,
      students: PropTypes.number.isRequired,
      inHostel: PropTypes.number.isRequired,
      outsideHostel: PropTypes.number.isRequired,
    }).isRequired,
    furniture: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
      })
    ).isRequired,
    finances: PropTypes.shape({
      expected: PropTypes.number.isRequired,
      collected: PropTypes.number.isRequired,
      remaining: PropTypes.number.isRequired,
      overdue: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default HostelCard;

