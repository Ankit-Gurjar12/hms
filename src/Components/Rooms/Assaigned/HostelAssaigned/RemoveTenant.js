import React from 'react'
import profile from "../../../../../src/assets/profile.jpg"
import building from "../../../../../src/assets/building.png"
import { Link } from 'react-router'

function RemoveTenant() {
  return (
	<>
	<div className='xl:w-[700px] w-full h-full mx-auto  text-white bg-[#2E2E2E] rounded-lg'>
		
		<div className='flex justify-between  pt-10 mx-5'>
		
		<h1 className='xl:text-3xl text-xl'>Remove Tenant ?</h1>
		<h1 className='text-2xl'>✕</h1>
		</div>

		<h1 className='xl:text-2xl text-[15px] mx-5 my-3'>Pending Amount not yet recovered</h1>
		
		<div className='flex gap-2 items-center mx-5 mt-10'>
			<img src={profile} alt="profile" className='rounded-full w-10 h-10 object-cover' />
			<h1 className='text-xl'>Ramakant Sharma</h1>
		</div>

		<div className='flex gap-3 mx-5 my-3'>
		<span className="material-symbols-outlined">
calendar_today
</span>
			<h1>Since : 8 March 2023</h1>
		</div>

		<h1 className='mx-5 my-2'>Room Number: 101</h1>

		<div className="flex items-center gap-4 mt-2 mx-5">

			<div className='flex items-center gap-2'>
			<span className="material-symbols-outlined">bed</span>
			<h1 className='text-[14px] font-medium'>6 Bedded Bunker</h1>
			</div>
          
          <span className="px-2 py-1 text-[14px] bg-[#121111] rounded-md">Floor No. 07</span>
          <span className="px-2 py-1 text-[14px] bg-[#121111] rounded-md flex items-center gap-1"> <img src={building} alt="" /> H1</span>
        </div>

		{/* outlined box */}

		<div className='m-5 border border-gray-600 h-[230px] rounded-md'>

			<h1 className='text-gray-400 mx-5 mt-5 mb-2 text-[15px]'>Remark for Removal!</h1>
			<h1 className='xl:text-[20px] ml-5'>Creating nuisance and engaged in narcotics <br /> activity </h1>

			<p className='mt-8 mb-4 mx-5 text-[14px]'>Proof</p>

			<span className='ml-5 mt-10 bg-[#111111] p-2 rounded-md '>whatsappimg245.png</span>
		</div>

		{/* red payment due */}

		<div className='bg-red-600 mx-5 rounded-md'>
			<h1 className='text-center py-2 xl:text-xl '>Tenant has a due rent of: ₹ 50,000</h1>
		</div>


		{/* buttons */}

		<div className='flex justify-between mx-5 my-5'>
			<button className='xl:px-24 xl:text-xl px-10 font-normal my-5 py-2 text-center bg-transparent border text-[#2cd7e0] border-[#17e1eb] rounded'>Cancel</button>
			<button className='xl:px-12 xl:text-xl px-5 font-normal my-5 py-2 text-center bg-transparent border border-[#656565] rounded'> <Link to={"/detail/remove/success"}>Yes, Remove Tenant</Link> </button>
		</div>

	</div>
	</>
   )
}

export default RemoveTenant