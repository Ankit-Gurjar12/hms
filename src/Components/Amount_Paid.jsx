import React from "react";
const Amount_Paid = () => {
  return (
    <div className="flex justify-start items-center h-screen ">
      <div className="bg-gray-700 text-white p-8   shadow-md  w-[532px]">
        <h2 className="text-2xl font-bold text-center mt-20 mb-4">Amount Paid Successfully !!</h2>
        <p className="text-center text-sm text-gray-400 mb-6">
          You can check details in Accounts &gt; <a href="#" className="text-teal-500 hover:underline">Debit</a>
        </p>
        <div className="bg-black mt-11 mb-32 p-4 rounded-md ">
          <div className="text-center font-medium text-lg mb-2">
            Naraymuthry Furniture Private Limited
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-teal-400 text-center">
              <p className="font-bold">Amount Paid</p>
              <p>&#8377; 3,60,000</p>
            </div>
            <div className="text-white text-center">
              <p className="font-bold">Total Amount</p>
              <p>&#8377; 5,60,000</p>
            </div>
            <div className="text-yellow-400 text-center">
              <p className="font-bold">Remaining</p>
              <p>&#8377; 5,60,000</p>
            </div>
          </div>
        </div>
        <button
          className="w-full bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600 "
          onClick={() => alert("Redirecting to Dashboard")} >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};
export default Amount_Paid ;