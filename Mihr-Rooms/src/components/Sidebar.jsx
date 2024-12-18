import React,{ useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine, RiBuilding2Line } from 'react-icons/ri';
import { PiCirclesThreePlusFill } from "react-icons/pi";
import { LuBedDouble } from "react-icons/lu";
import { MdAssignmentInd } from "react-icons/md";
import Occupancy from './occupancy'
import Hostels from './Hostels'
import Rooms from './Rooms'
import Assigned from './Assigned'
import Furniture from './Furniture'
import furniture from '../assets/furniture.png';
import furnitureActive from '../assets/furniture_active.png';



const renderIcon = (icon, isActive) => {
  // for Image
  if (typeof icon === 'string') {
    return <img src={isActive ? icon : icon} alt="icon" className="w-8 h-4" />; 
  }
  // for React Icons
  return isActive 
    ? React.cloneElement(icon, { className: 'text-[#00FFF5] w-full h-full' })  
    : React.cloneElement(icon, { className: 'text-[#B0B0B0] w-full h-full' });  
};

const navItems = [
  { title: 'Occupancy', defaultIcon: <PiCirclesThreePlusFill className='text-[#B0B0B0]'/>, activeIcon: <PiCirclesThreePlusFill className='text-[#00FFF5]'/>, path: '/', element: <Occupancy /> },
  { title: 'Hostels', defaultIcon: <RiBuilding2Line className='text-[#B0B0B0]'/>, activeIcon: <RiBuilding2Line className='text-[#00FFF5]'/>, path: '/hostels', element: <Hostels/>  },
  { title: 'Rooms', defaultIcon: <LuBedDouble className='text-[#B0B0B0]'/>, activeIcon: <LuBedDouble className='text-[#00FFF5]'/>, path: '/rooms', element: <Rooms/>  },
  { title: 'Assigned', defaultIcon: <MdAssignmentInd className='text-[#B0B0B0]'/>, activeIcon: <MdAssignmentInd className='text-[#00FFF5]'/>, path: '/assigned', element:< Assigned /> },
  { title: 'Furniture', defaultIcon: furniture, activeIcon: furnitureActive, path: '/furniture', element: <Furniture />},
];  

export default function SidebarLayout() {
  const location = useLocation();
  const [activeElement, setActiveElement] = useState(navItems[0].element);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {   
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black">
      {/* Hamburger Menu */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 text-white p-2 bg-[#202020] rounded-lg"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
      </button>

      {/* Sidebar  */}
      <aside
        className={`bg-[#202020] rounded-[10px] border border-black flex flex-col
          fixed lg:static transition-all duration-300
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} 
          w-[280px] lg:w-[250px] 
          h-[90vh] lg:h-auto mt-[5vh] lg:mt-4 mx-4
          z-40`}
      >
        <nav className="flex-1 w-full">
          <ul className="flex flex-col w-full transition-colors duration-200">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path} className="w-full">
                  <Link
                    to={item.path}
                    onClick={() => {
                      setActiveElement(item.element);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full px-4 py-6 flex items-center transition-colors duration-200 rounded-lg
                      ${isActive ? 'bg-[#2E2E2E]' : 'hover:bg-[#202020]'}`}
                  >
                    <span className="w-5 h-5 mr-3 flex items-center justify-center">
                      {renderIcon(isActive ? item.activeIcon : item.defaultIcon, isActive)}
                    </span>
                    <span className="text-sm text-gray-400">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-4 p-4 lg:p-8 mt-16 lg:mt-4">
        {activeElement}
      </main>

      {/* other devices */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
  </div>
  );
}