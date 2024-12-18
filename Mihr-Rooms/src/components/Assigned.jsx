import { RiSearch2Line } from 'react-icons/ri';

export default function Assigned() {
    return (
      <>
      <div className="relative w-full">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
        <RiSearch2Line size={20} />
      </div>
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search..."
        className="w-1/3 bg-gray-800 text-white placeholder-gray-500 pl-10 py-2.5 pr-4 rounded-lg focus:outline-none "
      />
    </div>
    </>
    )
  }
  
  