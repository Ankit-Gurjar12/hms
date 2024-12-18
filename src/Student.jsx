import React from "react";
import { GoLinkExternal } from "react-icons/go";
import { IoLogInOutline } from "react-icons/io5";
import { HiOutlineLogin } from "react-icons/hi";
import { MdCrisisAlert } from "react-icons/md";
import Sphoto from "./assets/analytics/photo.png";

const Student = () => {
  return (
    <div className="absolute top-14 right-0 flex flex-col w-full sm:w-[300px] lg:w-[300px] p-5 space-y-6 bg-transparent mt-[8px] mr-6 lg:mr-20">
      
      {/* Students Update Section */}
      <div className="defaulter h-[390px] sm:w-full bg-[#2E2E2E] rounded-[10px] overflow-hidden">
        <a href="#" className="bg-transparent cursor-pointer">
          <div className="subject bg-transparent flex items-center justify-between px-4 pt-5">
            <h1
              className="text-white bg-transparent"
              style={{ fontSize: "20px", fontWeight: "500" }}
            >
              Students Update
            </h1>
            <div className="link2 text-white bg-transparent mr-14">
              <GoLinkExternal className="bg-transparent text-[13px] " />
            </div>
          </div>
        </a>

        <div className="studentlist2 h-[350px] sm:w-full mt-4 px-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent scrollbar-hide">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="studentprofile mt-2 mx-auto h-[50px] w-full bg-[#111111] rounded-[10px] flex items-center justify-between overflow-hidden"
            >
              <div className="imgnamecon flex items-center">
                <div
                  className="studentimg h-10 w-10 ml-2 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${Sphoto})` }}
                ></div>
                <div className="name-time flex flex-col ml-4">
                  <h1 className="name text-white text-[14px]">
                    Ramakant Sharma
                  </h1>
                  <div className="time flex items-center mt-0.5">
                    {index % 2 === 0 ? (
                      <IoLogInOutline className="text-[aqua] text-[16px] mr-1" />
                    ) : (
                      <HiOutlineLogin className="text-[yellow] text-[16px] mr-1" />
                    )}
                    <p className="text-white text-[12px]">12:30</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Section */}
    <div
  className="additional-info bg-[#202020] rounded-[10px] flex flex-col items-center justify-center p-4 space-y-4"
  style={{ height: "230px" }}
>
  <div className="relative h-[80px] w-full flex items-center justify-center">
     <div
      className="absolute w-[55px] h-[55px] rounded-full"
      style={{
        backgroundColor: "rgba(255, 0, 0, 0.1)", 
        zIndex: 10,
      }}
    ></div>
    <div
      className="absolute w-[70px] h-[70px] rounded-full"
      style={{
        backgroundColor: "rgba(255, 0, 0, 0.1)", 
        zIndex: 10,
      }}
    ></div>
     <div
      className="absolute w-[90px] h-[90px] rounded-full"
      style={{
        backgroundColor: "rgba(255, 0, 0, 0.1)", 
        zIndex: 10,
      }}
    ></div>

    <MdCrisisAlert
      className="absolute"
      style={{
        width: "50px",
        height: "50px",
        zIndex: 20,
        color: "#FF0000", 
      }}
    />
  </div>

  <p className="text-white text-center text-[14px] font-medium">
    Press only in case of <br /> Emergency
  </p>

  <button
    className="bg-[#BD0303] text-white text-[16px] font-medium py-2 px-6 rounded-lg"
    style={{ width: "170px", height: "35px" }}
  >
    EMERGENCY
  </button>
</div>

    </div>
  );
};

export default Student;
