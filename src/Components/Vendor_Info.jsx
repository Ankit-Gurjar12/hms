import React from 'react'
const Vendor_Info = () => {
  return (
    <div className="  flex justify-start  items-center z-50">
      <div className="bg-gray-700 text-white mt-11 p-6   shadow-lg w-[532px]">
        <div className=" mb-5 ">
        <button className="text-white text-2xl">&times;</button>
          <h2 className="text-xl font-semibold">Add Vendor</h2>
          </div>
          <div className='space-y-7'>
            <input type="text" name="" className='w-full p-3 rounded text-xs bg-gray-800 border border-gray-700 text-white  focus:ring-white-500' placeholder='Name of Vendor' id="" />
            <input type="number" name="" className='w-full p-3 rounded text-xs bg-gray-800 border border-gray-700 text-white  focus:ring-white-500' placeholder='GSTIN/LLP No./Prop No.' id="" />
            <input type="text" name="" className='w-full p-3 rounded text-xs bg-gray-800 border border-gray-700 text-white  focus:ring-white-500' placeholder='Address line 1' id="" />
            <input type="text" name="" className='w-full p-3 rounded text-xs bg-gray-800 border border-gray-700 text-white  focus:ring-white-500' placeholder='Address line 2' id="" />
           <div className='flex space-x-5 '>
           <input type="number" name="" className=' p-3 rounded text-xs bg-gray-800 border border-gray-700 text-white  focus:ring-white-500' placeholder='Pincode' id="" />
           <input type="text" name="" className=' p-3 rounded text-xs bg-gray-800 border border-gray-700 text-white  focus:ring-white-500' placeholder='District' id="" />
         <select className='text-xs rounded bg-gray-800  border border-gray-700  focus:ring-white-500'>
          <option value="" className='text-gray-300 text-xs  '>State</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
         </select>
           </div>
            <input type="text" name="" className=' p-3 rounded bg-gray-800 text-xs border border-gray-700 text-white  focus:ring-white-500' placeholder='Country' id="" />
            <input type="tel" name="" className='w-full p-3 rounded bg-gray-800  text-xs border border-gray-700 text-white  focus:ring-white-500' placeholder='Contact Number' id="" />
            <input type="email" name="" className='w-full p-3 rounded bg-gray-800 border text-xs border-gray-700 text-white  focus:ring-white-500' placeholder='Email Address' id="" />
            <button className="w-full bg-teal-500 text-white py-3 rounded text-lg
             font-medium hover:bg-teal-600 ">Add Vendor</button>
          </div>
          </div>
          </div>
  )
}
export default Vendor_Info
