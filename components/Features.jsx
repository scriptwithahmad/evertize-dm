import React from "react";

const Features = () => {
  return (
    <>
      <div className="px-4 bg-[#eee]" id="features">
        <div className="py-20 max-w-[1200px] m-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <img
                className="rounded-lg md:w-full"
                src="https://i.pinimg.com/564x/2a/c5/ac/2ac5acac4c0660d9fdcbafc0d80c2382.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="text-base font-inter font-semibold leading-7 text-[#E77918]">
                Key Features
              </p>
              <h2 className="mt-2 text-4xl font-inter font-extrabold tracking-tight text-slate-900">
                - Everthing You Need
              </h2>
              <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2">
                {/* card 1 */}
                <div className="rounded-md p-2 border-[1px] transition-colors active:border-orange-700 border-orange-200 hover:border-orange-300">
                  <div className="bg-[#f7f7f7] hover:bg-[#ffffff] transition-all rounded-md p-4">
                    <h1 className="text-[#0F172A] font-[500] text-xl mb-2">
                      Ideas
                    </h1>
                    <p className="text-[13px] text-gray-600 leading-6 select-none">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ab, blanditiis.
                    </p>
                  </div>
                </div>
                {/* card 2 */}
                <div className="rounded-md p-2 border-[1px] transition-colors active:border-orange-700 border-orange-200 hover:border-orange-300">
                  <div className="bg-[#f7f7f7] hover:bg-[#ffffff] rounded-md p-4">
                    <h1 className="text-[#0F172A] font-[500] text-xl mb-2">
                      Inovation
                    </h1>
                    <p className="text-[13px] text-gray-600 leading-6 select-none">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ab, blanditiis.
                    </p>
                  </div>
                </div>
                {/* card 3 */}
                <div className="rounded-md p-2 border-[1px] transition-colors active:border-orange-700 border-orange-200 hover:border-orange-300 sm:col-span-2">
                  <div className="bg-[#f7f7f7] hover:bg-[#ffffff] rounded-md px-4 py-4 min-h-[100px] max-h-full p-4">
                    <h1 className="text-[#0F172A] font-[500] text-xl mb-2">
                      Marketing
                    </h1>
                    <p className="text-[13px] text-gray-600 select-none leading-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi quos temporibus ipsa excepturi.
                    </p>
                  </div>
                </div>
                {/* cards outer div  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
