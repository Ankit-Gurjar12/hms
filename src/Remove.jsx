import React from 'react';
import "@fontsource/montserrat";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineBed } from "react-icons/md";
import { MdPeopleOutline } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";
import Ellipse from "../assets/Ellipse.png";
import { FaRegCalendar } from "react-icons/fa6";

import { LiaCloudUploadAltSolid } from "react-icons/lia";



function Remove() {
  return (
    <div className="w-full max-w-[550px] mx-auto h-screen bg-[#2E2E2E] text-white flex justify-center">
      <div className="w-full max-w-[450px] px-4 py-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Remove Tenant</h1>
          <RxCross2 className='w-4 h-4' />
        </div>

        <div className="text-xs mb-6">
          <h2>Room Number: 101</h2>
        </div>

        <div className="flex flex-wrap gap-2 items-center mb-6">
          <div className="flex items-center gap-1">
            <MdOutlineBed className="w-4 h-4 sm:w-6 sm:h-6" />
            <h6 className="text-xs">6 Bedded Bunker</h6>
          </div>

          <div>
            <span className="px-2 py-1 bg-[#111111] rounded text-xs">Flat No.07</span>
          </div>

          <div className="flex items-center gap-1 px-2 py-1 bg-[#111111] rounded">
          <RiBuilding2Line />
            <h1 className="text-xs">H1</h1>
          </div>

          <div className="flex items-center gap-1 px-2 py-1 bg-[#111111] rounded"> 
          <MdPeopleOutline className='w-4 h-4' />
            <h1 className="text-xs">06</h1>
          </div>
        </div>

        <div className="text-xs mb-2">
          <h2>Tenant Details</h2>
        </div>

        <div className="bg-[#111111] p-2 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <img src={Ellipse} alt="Ellipse Icon" className="w-5 h-5" />
            <h3 className="text-xs">Ramakant Sharma</h3>
          </div>

          <div className="flex items-center mb-2">
            <FaRegCalendar className='w-4 h-4 mr-2' />
            <h6 className="text-[10px]">Since : 08 March 2023</h6>
          </div>

          <div className="grid grid-cols-2 sm:flex gap-2 text-left">
            <div className="text-[9px] border border-[#2E2E2E] p-2 w-full">
              <h6>Rent Dua</h6>
              <h6 className="font-bold">₹ 50,000</h6>
            </div>

            <div className="text-[9px] border border-[#2E2E2E] p-2 w-full">
              <h6>Defaults</h6>
              <h6 className="font-bold">65</h6>
            </div>

            <div className="text-[9px] border border-[#2E2E2E] p-2 w-full">
              <h6>Meal Type</h6>
              <h6 className="font-bold">Continental Veg</h6>
            </div>

            <div className="text-[9px] border border-[#2E2E2E] p-2 w-full">
              <h6>Meal Frequency</h6>
              <h6 className="font-bold">3/Per Day</h6>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="w-full sm:w-1/2 bg-[#111111] p-2 h-[120px]">
            <h6 className="text-[10px]">Remarks for Removal</h6>
          </div>
          
          <div className="w-full sm:w-1/2 bg-[#111111] p-2 h-[120px] flex flex-col items-center justify-center">
            <div className="relative w-10 h-10 mb-2 bg-[#2E2E2E] rounded-full">
            <LiaCloudUploadAltSolid className='w-6 h-6 absolute top-2 left-2' />
              {/* <img src={Cloud} alt="Cloud Icon" className="w-6 h-6 absolute top-2 left-2"/> */}
            </div>
            
            <div className="text-center">
              <h6 className="text-lg">Proof of Remark</h6>
              <p className="text-[8px]">JPG,PNG,SVG,PDF upto 15 MB</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="w-full max-w-[200px] p-2 bg-[#00868D] text-white rounded mt-6">
            Remove Tenant
          </button>
        </div>
      </div>
    </div>
  )
}

export default Remove