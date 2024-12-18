import { RiSearch2Line } from 'react-icons/ri';
import OccupancyCard from '../reusable/OccupancyCards';

export default function Occupancy() {
  return (
    <div className="p-4 lg:p-8 max-w-full">
      {/* Search Bar */}
      <div className="sticky top-0 z-50 bg-[#000000] pb-4 lg:-ml-[4rem]">
        <div className="relative w-full max-w-[300px]">
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <RiSearch2Line size={20} />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-800 text-white placeholder-gray-500 pl-10 py-2.5 pr-4 rounded-lg focus:outline-none"
          />
        </div>
      </div>

      {/* Occupancy Cards Grid*/}
      <div className="grid grid-cols-1 gap-6 lg:gap-0 lg:[&>*:not(:first-child)]:-mt-[2rem]">
        <OccupancyCard />
        <OccupancyCard />
        <OccupancyCard />
      </div>
    </div>
  );
}