import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineAccountBalance } from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";
import { PiHandSoapBold } from "react-icons/pi";
import { RiTv2Line } from "react-icons/ri";
import { FaBell, FaUser, FaRegCalendar } from "react-icons/fa6";

const Navbar = () => {
  const [active, setActive] = useState("dashboard");

  const handleClick = (item) => {
    setActive(item);
  };

  const getTextStyle = (item) => ({
    color: active === item ? "#FFFFFF" : "#B0B0B0",
  });

  const getIconColor = (item) => (active === item ? "#00FFF5" : "#B0B0B0");

  const menuItems = [
    { id: "dashboard", icon: LuLayoutDashboard, label: "Dashboard" },
    { id: "rooms", icon: RiTv2Line, label: "Rooms" },
    { id: "attendance", icon: GrDocumentUser, label: "Attendance" },
    { id: "accounts", icon: MdOutlineAccountBalance, label: "Accounts" },
    { id: "maintenance", icon: PiHandSoapBold, label: "Maintenance" },
  ];

  return (
    <div>
      <nav className="relative flex flex-wrap justify-between items-center text-white bg-black px-4 md:px-8 h-auto md:h-20 py-4 md:py-0">
        {/* logo */}
        <div className="flex items-center gap-1 md:ml-8 lg:ml-32">
          <div className="w-4 h-4 bg-[#00FFF5] rounded-full flex items-center justify-center"></div>
          <span className="text-white text-lg font-semibold">HMS</span>
        </div>

        {/* Menu Items */}
        <div className="flex flex-wrap gap-6 md:gap-18 justify-center relative mt-4 md:mt-0">
          {menuItems.map((item) => (
            <div key={item.id} className="relative flex flex-col items-center">
              <h2
                className={`inline-flex gap-2 cursor-pointer px-4 py-2 transition-all duration-300 ${
                  active === item.id
                    ? "border border-[#00FFF5] border-b-0 mb-[-2px] rounded-t-[12px] transition-none"
                    : "border-none"
                }`}
                style={getTextStyle(item.id)}
                onClick={() => handleClick(item.id)}
              >
                <item.icon
                  className="mt-1"
                  style={{ color: getIconColor(item.id) }}
                />
                {item.label}
              </h2>
            </div>
          ))}
        </div>

        <div className="flex gap-4 md:gap-6 items-center mt-4 md:mt-0 md:mr-8 lg:mr-20">
          <div className="flex items-center justify-center w-10 h-10 bg-[#202020] rounded-full cursor-pointer">
            <FaRegCalendar className="text-white text-xl" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-[#2F2F2F] rounded-full">
            <FaBell className="text-yellow-400 text-xl" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-[#2F2F2F] rounded-full">
            <FaUser className="text-[#00FFF5] text-l" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
