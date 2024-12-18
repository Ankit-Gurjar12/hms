import react from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router";
import MainAssaigned from './Components/Rooms/Assaigned/MainAssaigned';
import TenantDetails from './Components/Rooms/Assaigned/HostelAssaigned/TenantDetails'
import RemoveTenant from './Components/Rooms/Assaigned/HostelAssaigned/RemoveTenant'
import TenanatRemoveSuccess from './Components/Rooms/Assaigned/HostelAssaigned/TenanatRemoveSuccess'

function App() {
  return (
   <>
       <div className="bg-black w-full h-full ">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainAssaigned/>} /> 
      <Route path="/detail" element={<TenantDetails />} />
      <Route path="/detail/remove" element={<RemoveTenant />} />
      <Route path="/detail/remove/success" element={<TenanatRemoveSuccess />} />
    </Routes>
  </BrowserRouter>
    
      </div>
   </>
  );
}

export default App;
