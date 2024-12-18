import React, { useRef, useState } from 'react';
import { FaRegCalendar } from "react-icons/fa6";

const CustomCalendarButton = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const inputRef = useRef(null); 

  
  const openDatePicker = () => {
    if (inputRef.current) {
      inputRef.current.showPicker(); 
    } else {
      console.log('Input ref is not set');
    }
  };

  return (
    <div className="flex items-center space-x-3 p-2 ">
      <input type="date" ref={inputRef}value={selectedDate}onChange={(e) => setSelectedDate(e.target.value)} className="hidden" />
      <button onClick={openDatePicker} className="text-xl text-white "><FaRegCalendar/> </button>
    
        <p className="text-sm   text-gray-400 pr-4">{selectedDate || 'dd-mm-yy'}</p>
      </div>
    
  );
};

export default CustomCalendarButton;