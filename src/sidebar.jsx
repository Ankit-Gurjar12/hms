import React, { useState } from "react";
import { SiSimpleanalytics } from "react-icons/si";
import { PiStudent } from "react-icons/pi";
import { FaRegFaceAngry } from "react-icons/fa6";
import { LiaCubesSolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";
import { MdOutlineRoomService } from "react-icons/md";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("analytics");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const getIconColor = (item) => (activeItem === item ? "#00FFF5" : "#B0B0B0");
  const getTextColor = (item) => (activeItem === item ? "#FFFFFF" : "#B0B0B0");
  const getBackgroundColor = (item) =>
    activeItem === item ? "#2E2E2E" : "transparent";

  return (
    <div className="bg-[#202020] h-[88vh] w-42 sm:w-56 md:w-56 lg:w-56 mt-1 ml-32 flex flex-col rounded-lg">
        <ul className="space-y-6 mt-0.5">
          <li
            className="flex gap-2 items-center px-4 py-2 cursor-pointer rounded relative"
            onClick={() => handleItemClick("analytics")}
            style={{
              color: getTextColor("analytics"),
              backgroundColor: getBackgroundColor("analytics"),
            }}
          >
            <SiSimpleanalytics
              className="h-5 w-5"
              style={{ color: getIconColor("analytics") }}
            />
            Analytics
          </li>
          <li
            className="flex gap-2 items-center px-4 py-2 cursor-pointer rounded relative"
            onClick={() => handleItemClick("students")}
            style={{
              color: getTextColor("students"),
              backgroundColor: getBackgroundColor("students"),
            }}
          >
            <PiStudent
              className="h-5 w-5"
              style={{ color: getIconColor("students") }}
            />
            Students
          </li>
          <li
            className="flex gap-2 items-center px-4 py-2 cursor-pointer rounded relative"
            onClick={() => handleItemClick("complaints")}
            style={{
              color: getTextColor("complaints"),
              backgroundColor: getBackgroundColor("complaints"),
            }}
          >
            <FaRegFaceAngry
              className="h-5 w-5"
              style={{ color: getIconColor("complaints") }}
            />
            Complaints
          </li>
          <li
            className="flex gap-2 items-center px-4 py-2 cursor-pointer rounded relative"
            onClick={() => handleItemClick("stock")}
            style={{
              color: getTextColor("stock"),
              backgroundColor: getBackgroundColor("stock"),
            }}
          >
            <LiaCubesSolid
              className="h-5 w-5"
              style={{ color: getIconColor("stock") }}
            />
            Stock
          </li>
          <li
            className="flex gap-2 items-center px-4 py-2 cursor-pointer rounded relative"
            onClick={() => handleItemClick("users")}
            style={{
              color: getTextColor("users"),
              backgroundColor: getBackgroundColor("users"),
            }}
          >
            <LuUsers
              className="h-5 w-5"
              style={{ color: getIconColor("users") }}
            />
            Users
          </li>
          <li
            className="flex gap-2 items-center px-4 py-2 cursor-pointer rounded relative"
            onClick={() => handleItemClick("meals")}
            style={{
              color: getTextColor("meals"),
              backgroundColor: getBackgroundColor("meals"),
            }}
          >
            <MdOutlineRoomService
              className="h-5 w-5"
              style={{ color: getIconColor("meals") }}
            />
            Meals
          </li>
        </ul>
    </div>
  );
};

export default Sidebar;
