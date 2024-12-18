import React from "react";
import { RxCross2 } from "react-icons/rx";
import Ellipse from "../assets/Ellipse.png";
import { FaRegCalendar } from "react-icons/fa6";
import { MdOutlineBed } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";

function Oops() {
  return (
    <div className="w-[500px] h-[600px] bg-[#2E2E2E] flex-col items-start justify-center text-white ">
      <br />
      <div className="flex justify-between items-center ml-6 mt-2 text-2xl">
        <h1>Oops!!</h1>
        <RxCross2 className='w-4 h-4 mt-2 flex mr-10' />
      </div>

      <div className="w-[403px] h-[29px] text-sm mt-2 ml-6 flex gap-2">
        <h3>Seems Like something is Mission</h3>
      </div>

      <div className="flex items-center">
        <img
          src={Ellipse}
          alt="Ellipse Icon"
          className="w-6 h-6 ml-[22px] mt-5 flex "
        />
        <h3 className="text-left text-xs mt-5 ml-2">Ramakant Sharma</h3>
      </div>

      <div className="flex items-center mr-4 mb-1">
        
        <FaRegCalendar className='w-3 h-3 ml-[25px] mt-4' />
        <h2 className="text-left text-[9px] mt-5 ml-2">
          Since : 08 March 2023
        </h2>
      </div>

      <div className="flex items-center mr-4">
        <h2 className="ml-[25px] text-[10px] mt-2">Room Number : 101</h2>
      </div>

      
      <div className="h-[5%] w-[65%]  flex justify-around items-center mt-2 mb-8 text-[12px]">
        <MdOutlineBed className="w-6 h-6 ml-4" />
        <div>6 Bedded bunker</div>
        <div className="bg-[#111111] rounded-[3px] px-[6px]">Floor No. 07</div>
        <div className="flex items-center gap-1 h-5 px-2 py-1 bg-[#111111] rounded">
         <RiBuilding2Line />
          <p>Hi</p>
        </div>
      </div>

      <div className="w-[450px] h-241 p-2 items-start justify-start ml-6 flex-col border border-[#a39f9f33]">
        <div className="text-[10px] mb-2 flex">
          <h6>Remarks for Removal</h6>
        </div>
        <div className="text-sm mb-5">
          <h4>Creating nuisance and engaged in Narcotics</h4>
          <h4 className="mb-[6px]">activity</h4>
        </div>
        <div className="text-[10px] mb-2">
          <h6>Proof</h6>
        </div>
        <div className="text-[10px] bg-[#111111] w-[125px] px-2">
          <h2>Whatsappimage_7879.jpg</h2>
        </div>
      </div>

      <div className="text-ms text-center justify-center w-[450px] h-54 bg-[#FF2A2A] ml-6 mt-20">
        <h3>Tanent has a Dua Rent of ₹ 50,000</h3>
      </div>


      <div className="w-full p-1 mt-5 flex flex-row gap-4 items-center justify-start  ">
      <div >
         <button className="w-40 h-10 border border-[#00868D] text-center text-s text-[#00FFF5]  ml-6 mr-6 p-2 rounded-md ">Remove Tenant</button>
     </div>

     <div >
         <button className="w-40 h-10 bg-[#00868D] text-center text-s rounded-md  ml-20 p-2 ">Recover Money</button>
     </div>
     
      </div>


    </div>
  );
}

export default Oops;
