import React, { useState } from "react";

const Model = ({ modelData, setShowModel }) => {
  console.log(modelData);
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`h-full w-full overflow-auto rounded-lg text-white bg-[#050c2b] absolute top-[0] left-0 p-4 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <i
          onClick={handleClose}
          class="absolute top-2 right-2 bg-[#8080802c] hover:bg-[#8080803d] cursor-pointer p-2 rounded-md fa-solid fa-xmark"
        ></i>
        <div className="flex gap-4">
          <img
            className="w-[450px] h-[520px] rounded-lg sticky left-0 top-0 bg-blue-950"
            src={modelData.avatar}
            alt="image"
          />
          {/* info  -----*/}
          <div className="px-4 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl line-clamp-1 font-semibold font-serif tracking-wider mb-3 text-[#ffffffad]">
                {" "}
                {modelData.serviceName}{" "}
              </h1>
              <p className="text-[15px] font-light font-sans text-[#ffffff9d]">
                {modelData.message}
              </p>
            </div>
            {/* Additional Details  */}
            <div className="grid grid-cols-3 gap-4 mt-6 rounded-lg max-w-full w-fit h-fit">
              <div className="whitespace-nowrap bg-[#00279427] border border-[#8080801f] rounded-lg leading-6 px-3 py-2 text-[13px]">
                <span className="text-[#eeeeee73] font-light">Client Name</span>
                <h3 className="text-[#eeeeee9d] font-medium">
                  {modelData.name}
                </h3>
              </div>
              <div className="whitespace-nowrap bg-[#00279427] border border-[#8080801f] rounded-lg leading-6 px-3 py-2 text-[13px]">
                <span className="text-[#eeeeee73] font-light">
                  Client Phone
                </span>
                <h3 className="text-[#eeeeee9d] font-medium">
                  {modelData.phone}
                </h3>
              </div>
              <div className="whitespace-nowrap bg-[#00279427] border border-[#8080801f] rounded-lg leading-6 px-3 py-2 text-[13px]">
                <span className="text-[#eeeeee73] font-light">
                  Client Email
                </span>
                <h3 className="text-[#eeeeee9d] font-medium">
                  {modelData.email}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
