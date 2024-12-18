import React from "react";
import building from "../../../../../src/assets/building.png"
import group from "../../../../../src/assets/group.png"
import { Link } from "react-router";


const TenantDetails = () => {

  return (
    <div className={`xl:w-[700px] w-full mx-auto p-5  text-white bg-[#2E2E2E] rounded-lg`}>
      {/* Header */}
      <header>
      <button className="text-2xl text-white">
      ✕
      </button>
      <h1 className="text-2xl my-2">Tenant Details</h1>
      </header>

      {/* Room Information */}
      <div className="mb-6">
        <p className="text-xl my-5">Room Number: 101</p>
        <div className="flex items-center xl:gap-4 gap-2 mt-2 text-gray-400">
        <span className="material-symbols-outlined">bed</span>
          <span className="text-white text-[15px]"> 6 Bedded Bunker</span>
          <span className="px-2 py-1 text-[15px] bg-[#121111] rounded-md">Floor No. 07</span>
          <span className="px-2 py-1 bg-[#121111] text-[15px] rounded-md flex items-center gap-1">  <img src={building} alt="" />  H1</span>
          <span className="px-2 py-1 bg-[#121111] text-[15px] rounded-md flex items-center gap-1"> <img src={group} className="w-[20px]" alt="" />06</span>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 bg-[#121111] py-5 px-2 rounded-md">
          <div className="flex items-center justify-between ml-2 text-gray-400">
            <div className="flex gap-4 items-center ">
            <p className="text-[12px] xl:text-[15px]">Total Tenants: 5</p>
            <p className="text-[12px] xl:text-[15px]">Max Occupancy: 6</p>
            </div>
            
            <div className="xl:w-[320px] w-[150px] bg-gray-700 rounded-full h-2 ">
            <div
              className="bg-teal-400 h-2 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
          </div>
        </div>

      </div>

      {/* Tenant Cards */}
      <h1 className="my-5  text-xl font-medium">Tenants</h1>

      <div
      style={{
        scrollbarWidth: "none",
      }}
      className="space-y-5 w-full h-[313px] overflow-scroll ">

        {/* First Tenant Card */}
        <div className="bg-[#121111] rounded-lg my-5 p-5">
          <div className="flex items-center">
            <img
              src="/profile-placeholder.png"
              alt="Tenant"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl">Ramakant Sharma</h3>
            </div>

          </div>
          
          <p className="text-gray-400 mb-3 text-sm">Since: 08 March 2023</p>


          <div className="grid xl:flex grid-cols-2  gap-2 justify-between items-center text-gray-300">
            <p className="xl:w-[150px] w-[170px] h-[60px] rounded-md border border-gray-600">
              <span className="mx-2 my-1 font-medium text-[16px] ">Rent Due:</span> 
              <br />
              <span className="mx-2 mb-3 text-xl text-[20px]">₹50,000</span>
            </p>

            <p className="xl:w-[150px] w-[170px] h-[60px] rounded-md border border-gray-600">
              <span className="mx-2 my-1 font-medium ">Default</span> 
              <br />
              <span className="mx-2 mb-3 text-xl">65</span>
            </p>

            <p className="w-[170px] h-[60px] rounded-md border border-gray-600">
              <span className="mx-2 my-1 font-medium ">Meal Type</span> 
              <br />
              <span className="mx-2 mb-3 text-xl">Continental Veg</span>
            </p>

            <p className="xl:w-[150px] w-[170px] h-[60px] rounded-md border border-gray-600">
              <span className="mx-2 my-1 font-bold ">Meal Frequency</span> 
              <br />
              <span className="mx-2 mb-3 text-xl">3 / day </span>
            </p>
          
          </div>

          <div className="xl:flex grid  gap-3 mt-4">
            <button className=" border border-white text-white py-2 px-2 rounded">
              View Details
            </button>
            <button className="border border-red-600 text-red-600 py-2 px-4 rounded">
              <Link to={"/detail/remove"}> Remove Tenant</Link>
             
            </button>
            <button className="border border-green-600 text-green-600 py-2 px-4 rounded">
              Grant Leave
            </button>
          </div>
        </div>

        {/* second tenant */}
         <div className="bg-[#121111] rounded-lg my-5 p-5">
          <div className="flex items-center">
            <img
              src="/profile-placeholder.png"
              alt="Tenant"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl">Ramakant Sharma</h3>
            </div>

          </div>
          
          <p className="text-gray-400 mb-3 text-sm">Since: 08 March 2023</p>


          <div className="grid xl:flex grid-cols-2  gap-2 justify-between items-center text-gray-300">
            <p className="xl:w-[150px] w-[170px] h-[60px] rounded-md border border-gray-600">
              <span className="mx-2 my-1 font-medium ">Rent Due:</span> 
              <br />
              <span className="mx-2 mb-3 text-xl text-[20px]">₹50,000</span>
            </p>

            <p className="xl:w-[150px] w-[170px] h-[60px] rounded-md border border-gray-600">
              <span className="mx-2 my-1 font-medium ">Default</span> 
              <br />
              <span className="mx-2 mb-3 text-xl">65</span>
            </p>

            <p className="w-[170px] h-[60px] rounded-md border border-gray-600">
              <span className="mx-2 my-1 font-medium ">Meal Type</span> 
              <br />
              <span className="mx-2 mb-3 text-xl">Continental Veg</span>
            </p>

            <p className="xl:w-[150px] w-[170px] h-[60px] rounded-md border border-gray-600">
              <span className="mx-2 my-1 font-bold ">Meal Frequency</span> 
              <br />
              <span className="mx-2 mb-3 text-xl">3 / day </span>
            </p>
          
          </div>
          
          <div className="xl:flex grid  gap-3 mt-4">
            <button className=" border border-white text-white py-2 px-4 rounded">
              View Details
            </button>
            <button className="border border-red-600 text-red-600 py-2 px-4 rounded">
              Remove Tenant
            </button>
            <button className="border border-green-600 text-green-600 py-2 px-4 rounded">
              Grant Leave
            </button>
          </div>
        </div>

        {/* third tenant */}
        <div className="bg-[#121111] rounded-lg my-5 p-5">
          <div className="flex items-center">
            <img
              src="/profile-placeholder.png"
              alt="Tenant"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl">Ramakant Sharma</h3>
            </div>

          </div>
          
          <p className="text-gray-400 mb-3 text-sm">Since: 08 March 2023</p>


          <div className="grid xl:flex grid-cols-2  gap-2 justify-between items-center text-gray-300">
            <p className="xl:w-[150px] w-[170px] h-[60px] rounded-md border border-gray-600">
              <span className="mx-2 my-1 font-medium ">Rent Due:</span> 
              <br />
              <span className="mx-2 mb-3 text-xl text-[20px]">₹50,000</span>
            </p>

            <p className="xl:w-[150px] w-[170px] h-[60px] rounded-md border border-gray-600">
              <span className="mx-2 my-1 font-medium ">Default</span> 
              <br />
              <span className="mx-2 mb-3 text-xl">65</span>
            </p>

            <p className="w-[170px] h-[60px] rounded-md border border-gray-600">
              <span className="mx-2 my-1 font-medium ">Meal Type</span> 
              <br />
              <span className="mx-2 mb-3 text-xl">Continental Veg</span>
            </p>

            <p className="xl:w-[150px] w-[170px] h-[60px] rounded-md border border-gray-600">
              <span className="mx-2 my-1 font-bold ">Meal Frequency</span> 
              <br />
              <span className="mx-2 mb-3 text-xl">3 / day </span>
            </p>
          
          </div>
          
          <div className="xl:flex grid  gap-3 mt-4">
            <button className=" border border-white text-white py-2 px-4 rounded">
              View Details
            </button>
            <button className="border border-red-600 text-red-600 py-2 px-4 rounded">
              Remove Tenant
            </button>
            <button className="border border-green-600 text-green-600 py-2 px-4 rounded">
              Grant Leave
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TenantDetails;
