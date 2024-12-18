import React, { useState } from 'react'
import { Link } from 'react-router'
import building from "../../../../../src/assets/building.png"

function AssaignedPage() {
	const [isFilterVisible, setIsFilterVisible] = useState(false);

  return (
	<>
	
	<div className='w-full h-full '>

		
		
		{/* filter */}

		<div className='flex gap-2 xl:grid xl:gap-2 pb-5'>

		<input className='w-[280px] h-[40px] xl:w-[460px] xl:h-[62px] bg-[#141414] mt-[20px] ml-[40px]' placeholder='Search...' type="text" />


      {/* Filter Button for Phones */}
      <button
        className="block xl:hidden bg-[#141414] text-white h-[40px] px-4 py-2 rounded-md mt-[20px]"
        onClick={() => setIsFilterVisible(true)}
      >
       filter
      </button>

      {/* Filter Popup */}
      {isFilterVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-[#141414] w-[60%] max-w-[400px] p-5 rounded-md">
            {/* Close Button */}
            <button
              className="text-white mb-4 text-right w-full"
              onClick={() => setIsFilterVisible(false)}
            >
              ✕
            </button>

            {/* Room Types */}
            <div className="flex gap-2 h-full items-center mb-4 justify-between">
              <h3 className="text-white text-xl">Room Types</h3>
              <select
                className=" w-[100px] xl:w-full bg-[#1e1d1d] text-white py-1 pl-2 text-sm"
                name=""
                id=""
              >
                <option value="test">All</option>
              </select>
            </div>

            {/* Hostels */}
            <div className="flex gap-2 h-full items-center mb-4 justify-between">
              <h3 className="text-white text-xl">Hostels</h3>
              <select
                className="xl:w-full w-[100px] bg-[#1e1d1d] text-white py-1 pl-2 text-sm"
                name=""
                id=""
              >
                <option value="test">All</option>
              </select>
            </div>

            {/* Floors */}
            <div className="flex gap-2 h-full items-center justify-between">
              <h3 className="text-white text-xl">Floors</h3>
              <select
                className="xl:w-full w-[100px] bg-[#1e1d1d] text-white py-1 pl-2 text-sm"
                name=""
                id=""
              >
                <option value="test">All</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Filter for XL Screens */}
      <div className="hidden xl:flex w-[785px] h-[58px] mt-[20px] ml-[40px] justify-around bg-[#141414]">
        {/* Room Types */}
        <div className="flex gap-2 h-full items-center ml-[10px]">
          <h3 className="text-white text-2xl">Room Types</h3>
          <select
            className="w-[80px] ml-[10px] bg-[#1e1d1d] text-white py-1 pl-2 text-xl"
            name=""
            id=""
          >
            <option value="test">All</option>
          </select>
        </div>

        {/* Hostels */}
        <div className="flex gap-2 h-full items-center ml-[10px]">
          <h3 className="text-white text-2xl">Hostels</h3>
          <select
            className="w-[80px] ml-[10px] bg-[#1e1d1d] text-white py-1 pl-2 text-xl"
            name=""
            id=""
          >
            <option value="test">All</option>
          </select>
        </div>

        {/* Floors */}
        <div className="flex gap-2 h-full items-center ml-[10px]">
          <h3 className="text-white text-2xl">Floors</h3>
          <select
            className="w-[80px] ml-[10px] bg-[#1e1d1d] text-white py-1 pl-2 text-xl"
            name=""
            id=""
          >
            <option value="test">All</option>
          </select>
        </div>
      </div>
    </div>

		{/* filter end */}



		{/* bed Bunkers component */}
		
    <div
	style={{
        scrollbarWidth: "none",
      }}
	className=' w-full h-screen overflow-scroll  xl:grid xl:grid-cols-2 grid-cols-1' >
		
		<div className='bg-[#141414] xl:w-[550px] rounded-md h-[280px] xl:h-[340px] m-10 text-xl'>
			<div className='text-white flex mb-2 items-center ml-3 w-full'>
			<span className="material-symbols-outlined">bed</span>
				<div className='xl:mx-3 ml-1 my-4 text-[14px] xl:text-xl '>6 Bed Bunkers</div>

				<span className=' my-3 mx-5 px-2 py-1 text-[15px] xl:text-xl rounded-md bg-[#0f0f0f] '>Floor No. 7</span>

				<span className='text-[15px] xl:text-xl my-3 mx-5 px-2 py-1 rounded-md bg-[#0f0f0f] flex items-center gap-1'>  <img src={building} alt="" /> H1</span>
			</div>
			
			{/* room allotment boxes */}

			<div className='grid grid-cols-10 gap-1 px-2'>
			<button
			className='bg-red-600  text-white rounded-md xl:py-1 text-center text-[16px]'><Link to={"/detail"}>101</Link></button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>102</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>103</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>104</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>105</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>106</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>107</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>108</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>109</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>110</button>

			<button className='bg-red-600 xl:py-1 text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>

			<button className='bg-red-600 xl:py-1 text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>

			<button className='bg-red-600 xl:py-1 text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>

			<button className='bg-red-600 xl:py-1 text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>

			<button className='bg-red-600 xl:py-1 text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>

			</div>
		</div>

		<div className='bg-[#141414] xl:w-[550px] rounded-md h-[280px] xl:h-[340px] m-10 text-xl'>
			<div className='text-white flex mb-2 items-center ml-3 w-full'>
			<span className="material-symbols-outlined">bed</span>
				<div className='xl:mx-3 ml-1 my-4 text-[14px] xl:text-xl '>6 Bed Bunkers</div>

				<span className=' my-3 mx-5 px-2 py-1 text-[15px] xl:text-xl rounded-md bg-[#0f0f0f] '>Floor No. 7</span>

				<span className='text-[15px] xl:text-xl my-3 mx-5 px-2 py-1 rounded-md bg-[#0f0f0f] flex items-center gap-1'>  <img src={building} alt="" /> H1</span>
			</div>
			
			{/* room allotment boxes */}

			<div className='grid grid-cols-10 gap-1 px-2'>
			<button
			className='bg-red-600  text-white rounded-md xl:py-1 text-center text-[16px]'><Link to={"/detail"}>101</Link></button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>102</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>103</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>104</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>105</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>106</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>107</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>108</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>109</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>110</button>

			<button className='bg-red-600 xl:py-1 text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>

			<button className='bg-red-600 xl:py-1 text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>

			<button className='bg-red-600 xl:py-1 text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>

			<button className='bg-red-600 xl:py-1 text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>

			<button className='bg-red-600 xl:py-1 text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>

			</div>
		</div>

		<div className='bg-[#141414] xl:w-[550px] rounded-md h-[280px] xl:h-[340px] m-10 text-xl'>
			<div className='text-white flex mb-2 items-center ml-3 w-full'>
			<span className="material-symbols-outlined">bed</span>
				<div className='xl:mx-3 ml-1 my-4 text-[14px] xl:text-xl '>6 Bed Bunkers</div>

				<span className=' my-3 mx-5 px-2 py-1 text-[15px] xl:text-xl rounded-md bg-[#0f0f0f] '>Floor No. 7</span>

				<span className='text-[15px] xl:text-xl my-3 mx-5 px-2 py-1 rounded-md bg-[#0f0f0f] flex items-center gap-1'>  <img src={building} alt="" /> H1</span>
			</div>
			
			{/* room allotment boxes */}

			<div className='grid grid-cols-10 gap-1 px-2'>
			<button
			className='bg-red-600  text-white rounded-md xl:py-1 text-center text-[16px]'><Link to={"/detail"}>101</Link></button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>102</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>103</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>104</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>105</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>106</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>107</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>108</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>109</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>110</button>

			<button className='bg-red-600 xl:py-1 text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>

			<button className='bg-red-600 xl:py-1 text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>

			<button className='bg-red-600 xl:py-1 text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>

			<button className='bg-red-600 xl:py-1 text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>

			<button className='bg-red-600 xl:py-1 text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>
			<button className='bg-red-600  text-white rounded-md text-center text-[16px]'>101</button>

			</div>
		</div>
		
	</div>
	</div>
	</>
  )
}

export default AssaignedPage