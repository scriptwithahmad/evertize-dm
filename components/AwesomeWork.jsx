import React from "react";

const AwesomeWork = () => {
  return (
    <div className="h-[70vh] bg-[#fff]">
      <div className="text-center py-8 mb-4">
        <span className="text-orange-600 font-semibold text-sm">- WORK -</span>
        <h1 className="font-bold text-2xl mt-1">Our Awesome Work</h1>
      </div>
      <div className="grid grid-cols-4 gap-6 text-center max-w-[1200px] m-auto">
        <div className="card bg-[#eee] px-8 py-10">
          <i class="text-blue-500 text-4xl mb-4 fa-solid fa-user"></i>
          <div>
            <span className="client text-xl font-semibold text-gray-800">259</span>
            <h1 className="heading text-gray-800 font-bold mt-4">PROJECTS COMPLETED</h1>
          </div>
        </div>
        <div className="card bg-[#eee] px-8 py-10">
          <i class="text-blue-500 text-4xl mb-4 fa-solid fa-user"></i>
          <div>
            <span className="client text-xl font-semibold text-gray-800">120+</span>
            <h1 className="heading text-gray-800 font-bold mt-4">HAPPY CUSTOMERS</h1>
          </div>
        </div>
        <div className="card bg-[#eee] px-8 py-10">
          <i class="text-blue-500 text-4xl mb-4 fa-solid fa-user"></i>
          <div>
            <span className="client text-xl font-semibold text-gray-800">8</span>
            <h1 className="heading text-gray-800 font-bold mt-4">AWARDS RECEIVED</h1>
          </div>
        </div>
        <div className="card bg-[#eee] px-8 py-10">
          <i class="text-blue-500 text-4xl mb-4 fa-solid fa-user"></i>
          <div>
            <span className="client text-xl font-semibold text-gray-800">15</span>
            <h1 className="heading text-gray-800 font-bold mt-4">Experience</h1>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default AwesomeWork;
