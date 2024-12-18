import React from "react";
import { FaPlus} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import CustomCalendarButton from "./CustomCalendarButton";
import CustomCalnedarTwo from "./CustomCalendarTwo"
import File from "./File";

const Select_Category = () => {
  return (

    <div className="flex justify-start  w-full">
    <div className="flex items-center justify-center  ">
      <div className="bg-gray-700 text-white   p-8  shadow-lg mt-10 w-[532px]">
      <section className="text-white "><RxCross2/></section>
      <h2 className="text-white  mb-4  text-2xl pt-3">Add Furniture</h2>
      <div className="pt-1 pb-8">
        <p className="text-white">Category : Bed</p>
      </div>

        <div className="mb-6 pb-5">
          <div className="flex items-center gap-4">
            <select className="w-[500px] h-[40px] p-2  bg-gray-800 border-gray-600 rounded  focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs min-w-56  ">
              <option>Select Vendor</option>
            </select>
            <button className=" flex items-center gap-2 bg-teal-500 text-white py-3 px-3 rounded hover:bg-teal-600 text-xs w-40  ">
             <FaPlus/>Add Vendor
            </button>
          </div>
        </div>

        <div className="mb-4">
          <input type="text"placeholder="Enter GSTIN / LLP No. / Prop No." className="w-[340px] p-3 bg-gray-800 border border-gray-600 rounded text-xs " />
        </div>
        <div className="mb-4">
          <input type="text" placeholder="Enter Address" className="w-[340px] p-3 bg-gray-800 border border-gray-600 rounded text-xs" />
        </div>
        <div className="text-2xl font-sans pb-4 pt-16">Product Details</div>
        <div className="mb-4">
          <input type="text" placeholder="Enter Product Name"className="w-[340px] p-3 bg-gray-800 border border-gray-600 rounded text-xs" />
        </div>

        <div className="flex  mb-4  ">
          <div className=" pt-2"> 
            <input type="Integer" placeholder=" Qty."className=" p-3 bg-gray-800 border border-gray-600 rounded w-16 text-xs" />
          </div>
          <div className=" p-2">  
          <div className="w-1/2">
           <input type="" placeholder=" ₹ Price/Unit" className=" p-3 bg-gray-800 border border-gray-600 rounded w-32 text-xs" />
          </div>
        </div>
        </div>
          <File/>
        <div className="flex gap-5 mb-4">
          <div className="">
            <label htmlFor="dueDate" className="block text-sm font-medium mb-2 mt-5  text-gray-400 "> Due Date </label>
           <div className="bg-gray-800  p-1 border-gray-600 rounded pr-5"> <CustomCalendarButton/> </div>
          </div>
        
          <div className="">
            <label htmlFor="expectedDelivery" className="block text-sm font-medium mb-2 mt-5 text-gray-400 ">  Expected Delivery </label>
            <div className="bg-gray-800  p-1 border-gray-600 rounded pr-5"><CustomCalnedarTwo/></div>
          </div>
        </div>
        <button className="w-[400px] bg-teal-500 text-white py-2 rounded flex items-center justify-center hover:bg-teal-600 ml-4">
          Proceed
        </button>
      </div>
    </div>
    </div>
  );
};

export default Select_Category;
