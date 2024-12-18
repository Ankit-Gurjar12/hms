import react from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router";
import MainAssaigned from './Components/Rooms/Assaigned/MainAssaigned';
import TenantDetails from './Components/Rooms/Assaigned/HostelAssaigned/TenantDetails'
import RemoveTenant from './Components/Rooms/Assaigned/HostelAssaigned/RemoveTenant'
import TenanatRemoveSuccess from './Components/Rooms/Assaigned/HostelAssaigned/TenanatRemoveSuccess'
import Add_Furniture from './Components/Rooms/Assaigned/Add_Furniture'
import Select_Category from './Components/Select_Category'
import Vendor_Info from './Components/Vendor_Info'
import Amount_Paid from './Components/Amount_Paid';


function App() {
  return (
   <>
      <Add_Furniture/> 
    <Select_Category/> 
    <Vendor_Info/>
    <Amount_Paid/>
    
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
