import React from 'react'
import profile from "../../../../../src/assets/profile.jpg"
import building from "../../../../../src/assets/building.png"


function TenanatRemoveSuccess() {
  return (
	<>
	<div className='w-full h-screen flex items-center justify-center'>
		<div className='w-[500px] xl:h-[550px] h-[600px] bg-[#2E2E2E]'>
			<div className='flex items-center mx-6 mt-5 text-white justify-between'>
			<h1 className="text-xl">Tenant Removed Successfully</h1>
			<h1>✕</h1>
			</div>

			<div className='flex gap-2 items-center mx-5 mt-10'>
			<img src={profile} alt="profile" className='rounded-full w-10 h-10 object-cover' />
			<h1 className='text-xl text-white'>Ramakant Sharma</h1>
		</div>

		<div className='flex gap-3 mx-5 my-3'>
		<span className="material-symbols-outlined">calendar_today</span>
			<h1 className='text-white'>Since : 8 March 2023</h1>
		</div>

		<h1 className='mx-5 my-2 text-white'>Room Number: 101</h1>

		<div className="flex items-center gap-4 mt-2 mx-5">

			<div className='flex items-center gap-2'>
			<span className="material-symbols-outlined">bed</span>
			<h1 className='text-[14px] font-medium text-white'>6 Bedded Bunker</h1>
			</div>
          
          <span className="px-2 py-1 text-[14px] bg-[#121111] rounded-md text-white">Floor No. 07</span>
          <span className="px-2 py-1 text-[14px] bg-[#121111] rounded-md flex items-center gap-1 text-white"> <img src={building} alt="" /> H1</span>
        </div>

		<div className='xl:flex grid grid-cols-2 gap-2 items-center mx-5 xl:ml-5 mt-5'> 
			<span className='bg-[#121111] text-white px-5 py-1 rounded-sm'> 
				<h1 className='text-[15px]'>Rent Due</h1>
				<h1 className='text-[15px]'>₹50,000</h1>
			</span>
			<span className='bg-[#121111] text-white px-2 py-1 rounded-sm'> 
				<h1 className='text-[15px]'>Defaults</h1>
				<h1 className='text-[15px]'>65</h1>
			</span>
			<span className='bg-[#121111] text-white px-2  py-1 rounded-sm'> 
				<h1 className='text-[15px]'>Meal Type</h1>
				<h1 className='text-[15px]'>Continental Veg</h1>
			</span>
			<span className='bg-[#121111] text-white px-2 py-1 rounded-sm'> 
				<h1 className='text-[15px]'>Meal Frequency</h1>
				<h1 className='text-[15px]'>3 / Day</h1>
			</span>
		</div>
			<h1 className='text-[12px] text-[#9a9a9a] ml-5 mt-8'>
				Remarks for Removal
			</h1>
			
			<h1 className='text-white ml-5 mt-2'>
				Creating Nuisance and engaged in Narcotics
				<br />
				Activity
			</h1>

			<div className='flex gap-5 items-center mt-3'>
				<h1 className=' text-[#9a9a9a] text-[12px] ml-5 mt-2'>Proof</h1>
				<span className='px-2 py-1 bg-[#121111] text-[12px] text-white rounded-sm'>Whatsappimage_345.png</span>
			</div>

			<div className='flex items-center justify-center mt-8'>
				<button className='border border-[#00868D] text-[#00868D] px-2 py-1'>Back to DashBoard</button>
			</div>
		</div>
	</div>
	</>
  )
}

export default TenanatRemoveSuccess