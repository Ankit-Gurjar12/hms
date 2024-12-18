import React from 'react'
import { RxCross2 } from "react-icons/rx";

const Add_Furniture = () => {


  return (
    <div className='flex justify-start w-full '>
    <div className=" items-end justify-end   bg-gray-700 w-[532px]  h-screen">
        <section className="text-white pt-7 p-5 "><RxCross2/></section>
        <h2 className="text-white   mb-4  pl-5  text-2xl">Add Furniture</h2>

    <div className="flex items-center justify-center  bg-gray-700 ">
        
      <div className="bg-gray-900 p-6 mt-[100px] rounded-lg shadow-lg w-80 ">
        
        <div className="mb-4 ">
          <label className="text-white block mb-2 ">Select Category</label>
          <select
            className="w-full relative px-4 py-2 mt-5 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs ">

        
            <option value="" className='text-gray-300 text-xs '>Select Furniture Category</option>
            <option value="Sofa" className='text-gray-300 text-xs '>Sofa</option>
            <option value="Table" className='text-gray-300 text-xs  '>Table</option>
            <option value="Chair" className='text-gray-300 text-xs  '>Chair</option>
            <option value="Bed" className='text-gray-300 text-xs  '>Bed</option>
          </select>
        </div>
        <button
          className="w-full bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 mt-36">
          Proceed
        </button>
      </div>
    </div>
</div>
</div>
    
  )
}

export default Add_Furniture
