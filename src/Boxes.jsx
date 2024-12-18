import React, { useState } from "react";
import { GoLinkExternal } from "react-icons/go";

const Boxes = () => {
  const [percentages, setPercentages] = useState({
    hostel1: 55,
    hostel2: 75,
    hostel3: 95,
  });

  const handleMouseDown = (e, hostelKey) => {
    const initialY = e.clientY;
    const initialPercentage = percentages[hostelKey];

    const handleMouseMove = (e) => {
      const deltaY = initialY - e.clientY;
      const newPercentage = Math.max(
        0,
        Math.min(100, initialPercentage + deltaY / 2)
      );
      setPercentages((prev) => ({
        ...prev,
        [hostelKey]: newPercentage,
      }));
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const renderCard = (label, color, key) => (
    <div className="bg-[#111111] p-4 rounded-lg shadow-lg w-full sm:w-1/3 md:w-48 h-auto sm:h-48 flex flex-col justify-center items-center space-y-4 relative">
      <span className="absolute top-2 left-2 text-sm flex items-center space-x-1">
        <span className="text-sm">{label}</span>
        <GoLinkExternal className="ml-1 w-2.5 h-2.5" />
      </span>
      <div
        className="relative w-24 sm:w-32 h-24 sm:h-32 cursor-pointer"
        onMouseDown={(e) => handleMouseDown(e, key)}
      >
        <svg width="100%" height="100%" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke="#333333"
            strokeWidth="4"
          />
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeDasharray={`${percentages[key]} ${100 - percentages[key]}`}
            strokeDashoffset="2"
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 0.3s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-lg font-bold">
            {Math.round(percentages[key])}%
          </span>
        </div>
      </div>
    </div>
  );

  const renderFeesCollectionGraph = () => (
    <div className="relative w-24 sm:w-32 h-24 sm:h-32">
      <svg width="100%" height="100%" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke="#333333"
          strokeWidth="3"
        />
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke="#00FFF5"
          strokeWidth="4"
          strokeDasharray="50 50"
          strokeDashoffset="0"
        />
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke="#FF05C8"
          strokeWidth="4"
          strokeDasharray="25 75"
          strokeDashoffset="-50"
        />
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke="#FFE605"
          strokeWidth="4"
          strokeDasharray="25 75"
          strokeDashoffset="-75"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-lg font-bold">50%</span>
      </div>
    </div>
  );
  return (
    <div>
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex flex-col w-full h-screen p-5 space-y-6 bg-transparent mt-[5px] ">
        {/* Occupancy Section */}
        <div className=" mt-6">
          <div className="bg-[#202020] text-white flex flex-col items-start p-4 space-y-4 w-full max-w-3xl mx-auto rounded-[10px]">
            <div className="w-full text-left mb-2">
              <h1 className="text-m flex items-center">
                Occupancy
                <GoLinkExternal
                  className="ml-2 w-3.5 h-3.5"
                  style={{ color: "white" }}
                />
              </h1>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 w-full">
              {renderCard("Hostel 1", "#00FFF5", "hostel1")}
              {renderCard("Hostel 2", "#FFE605", "hostel2")}
              {renderCard("Hostel 3", "#FF05C8", "hostel3")}
            </div>
          </div>
        </div>

        {/* Fees Collection Section */}
        <div className="mb-6">
          <div className="bg-[#202020] text-white flex flex-col items-start p-4 space-y-4 w-full max-w-3xl mx-auto rounded-[10px]">
            <div className="w-full text-left mb-2">
              <h1 className="text-m flex items-center">
                Fees Collection
                <GoLinkExternal className="ml-2 w-3.5 h-3.5" />
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row w-full items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {renderFeesCollectionGraph()}
              <div className="grid grid-cols-2 gap-2 w-full">
                {/* Boxes */}
                <div className="bg-[#111111] w-full h-[50px] flex items-center justify-between rounded-md shadow-md p-3">
                  <div className="flex flex-col justify-center">
                    <span className="text-white text-xs">Expected</span>
                    <span className="text-white text-sm mt-1">₹ 5,200,000</span>
                  </div>
                  <GoLinkExternal className="ml-2 w-3.5 h-3.5" />
                </div>
                <div className="bg-[#111111] w-full h-[50px] flex items-center justify-between rounded-md shadow-md p-3">
                  <div className="flex flex-col justify-center">
                    <span className="text-white text-xs">Remaining</span>
                    <span className="text-[#FFE605] text-sm mt-1">
                      ₹ 1,560,000
                    </span>
                  </div>
                  <GoLinkExternal
                    className="ml-2 w-3.5 h-3.5"
                    style={{ color: "yellow" }}
                  />
                </div>
                <div className="bg-[#111111] w-full h-[50px] flex items-center justify-between rounded-md shadow-md p-3">
                  <div className="flex flex-col justify-center">
                    <span className="text-white text-xs">Collected</span>
                    <span className="text-[#00FFF5] text-sm mt-1">
                      ₹ 2,600,000
                    </span>
                  </div>
                  <GoLinkExternal
                    className="ml-2 w-3.5 h-3.5"
                    style={{ color: "aqua" }}
                  />
                </div>
                <div className="bg-[#111111] w-full h-[50px] flex items-center justify-between rounded-md shadow-md p-3">
                  <div className="flex flex-col justify-center">
                    <span className="text-white text-xs">Overdue</span>
                    <span className="text-[#FF05C8] text-sm mt-1">
                      ₹ 1,040,000
                    </span>
                  </div>
                  <GoLinkExternal
                    className="ml-2 w-3.5 h-3.5"
                    style={{ color: "#FF05C8" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complaints Section */}
        <div>
          <div className="bg-[#202020] text-white flex flex-col items-start p-3 space-y-3 w-full max-w-3xl mx-auto rounded-[10px]">
            <div className="w-full flex items-center justify-start space-x-2">
              <h1 className="text-lg font-semibold">Complaints</h1>
              <GoLinkExternal className="ml-2 w-3.5 h-3.5" />
            </div>

            <div className="flex flex-col lg:flex-row w-full items-center space-y-2 lg:space-y-0 lg:space-x-2 mt-3">
              <div className="relative w-full lg:w-[180px] h-[45px] bg-[#333333] rounded-md">
                <div
                  className="absolute h-full bg-[#00FFF5] rounded-l-md"
                  style={{ width: "60%" }}
                ></div>
                <div
                  className="absolute h-full bg-[#FFE605] rounded-r-md"
                  style={{ width: "40%", left: "60%" }}
                ></div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full">
                {/* Total Complaints */}
                <div className="bg-[#111111] flex flex-col items-center justify-center rounded-md shadow-md p-2 w-full sm:w-[180px] h-[50px]">
                  <div className="flex items-center space-x-1">
                    <span className="text-[11px]">Total Complaints</span>
                    <GoLinkExternal className="ml-2 w-3.5 h-3.5" />
                  </div>
                  <span className="text-md mt-1">158</span>
                </div>

                {/* Resolved */}
                <div className="bg-[#111111] flex flex-col items-center justify-center rounded-md shadow-md p-2 w-full sm:w-[180px] h-[50px]">
                  <div className="flex items-center space-x-1">
                    <span className="text-[11px]">Resolved</span>
                    <GoLinkExternal className="ml-2 w-3.5 h-3.5" />
                  </div>
                  <span className="text-md text-[#00FFF5] mt-1">96</span>
                </div>

                {/* Open */}
                <div className="bg-[#111111] flex flex-col items-center justify-center rounded-md shadow-md p-2 w-full sm:w-[180px] h-[50px]">
                  <div className="flex items-center space-x-1">
                    <span className="text-[11px]">Open</span>
                    <GoLinkExternal className="ml-2 w-3.5 h-3.5" />
                  </div>
                  <span className="text-md text-[#FFE605] mt-1">62</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
