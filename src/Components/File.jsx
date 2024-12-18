import React, { useState } from "react";
import { RxUpload } from "react-icons/rx";

const File = () => {
  const [invoiceFile, setInvoiceFile] = useState(null);
  const [productImages, setProductImages] = useState(null);

  const handleInvoiceUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setInvoiceFile(file);
    }
  };

  const handleProductImagesUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProductImages(file);
    }
  };

  return (
    <div className="flex flex-row  gap-5   ">
      
      <div className="flex items-center gap-2">
        <input type="file" id="uploadInvoice"className="hidden" onChange={handleInvoiceUpload} />
       <label htmlFor="uploadInvoice" className="flex items-center gap-10 text-gray-400 p-3 rounded bg-gray-800 cursor-pointer text-xs " >
         <span>Upload Invoice</span>
         <RxUpload className="text-xl" />
        </label>
        {invoiceFile && (
          <span className="text-gray-400 text-sm">
            {invoiceFile.name}
          </span>
        )}
      </div>

      {/* Upload Product Images */}
      <div className="flex items-center gap-2">
        <input type="file" id="uploadProductImages"  className="hidden" onChange={handleProductImagesUpload} />
        <label htmlFor="uploadProductImages" className="flex items-center gap-10 text-gray-400 p-3 rounded bg-gray-800 cursor-pointer text-xs" >
          <span>Product Images</span>
          <RxUpload className="text-xl" />
        </label>
        {productImages && (
          <span className="text-gray-400 text-sm">
            {productImages.name}
          </span>
          
        )}
        <p className="text-gray-400 pt-4 pl-2">Optional</p>
      </div>
      
    </div>
  );
};

export default File;
