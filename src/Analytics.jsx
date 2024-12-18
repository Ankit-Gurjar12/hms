import React, { useState } from "react";

import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Boxes from "./Boxes";
import Student from "./Student";

const Analytics = () => {
  return (
    <div>
      <div
        className="fixed bg-black text-white w-full"
        style={{
          maxWidth: "1728px",
          minHeight: "120vh",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
        }}
      >
        <Navbar />
        <Sidebar />
        <Boxes />
        <Student />
      </div>
    </div>
  );
};

export default Analytics;
