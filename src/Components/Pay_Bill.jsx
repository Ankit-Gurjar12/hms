import React from "react";

const Pay_Bill = () => {
  return (
    <div className="  flex justify-start items-center z-50 pt-8">
      <div className="bg-gray-700 text-white  p-6   shadow-lg w-[532px]">
        <div className=" mb-5 ">
        <button className="text-white text-2xl">&times;</button>
          <h2 className="text-xl font-semibold">Pay Bill</h2>
          <p className="text-sm mt-3 text-white">Order ID: #MAN301020232333</p>
         </div>
     <div className="space-y-5">
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Amount Remaining</label>
              <div className="bg-gray-800 p-3 rounded text-lg">₹1,59,963</div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Enter Amount to Pay</label>
              <input type="number" placeholder="Amount" className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
          </div>

          <div className=" flex justify-between ">
         <div> <p className="text-sm font-semibold mb-4 text-gray-400">Due Date</p>
    <div className="flex items-center space-x-3 bg-gray-800 text-white p-3 rounded-md shadow-md w-max">
    <p className="text-lg font-bold mt-1">12 Sep 2023</p>
      <h1 className="text-2xl">📅</h1>
     </div>
     </div>
     <div> <p className="text-sm font-semibold mb-4 text-gray-400">Expected Date</p>
    <div className="flex items-center space-x-3 bg-gray-800 text-white p-3 rounded-md shadow-md w-max">
    <p className="text-lg font-bold mt-1">12 Sep 2023</p>
      <h1 className="text-2xl">📅</h1>
     </div>
          </div>
          </div>
          <div className="text-sm text-gray-400">
            <h3 className="text-base font-medium text-white mb-2">Vendor Details</h3>
            <p className="mb-4">Naraymuthry Furniture Private Limited</p>
            <p>GSTIN / LLP Reg No. / Prop. Number: GSTINX45698POI</p>
            <p>
              101-103 Chanda Tower, Opp. Grand Utsave Marriage Garden, Main Gandhi
              Path Road, Vaishali Nagar, Jaipur, Rajasthan - 302021 India
            </p>
          </div>
 <button className="w-full bg-teal-500 text-white py-3 rounded text-lg font-medium hover:bg-teal-600 ">Proceed to Pay</button>
        </div>
      </div>
    </div>
  )
}

export default Pay_Bill;