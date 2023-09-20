import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loaderMainDiv relative">
        <div class="loader">
          <div id="first">
            <div id="second">
              <div id="third"></div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="absolute top-[56%] text-xl left-[47%] font-semibold text-orange-500">Loading...</h3>
    </>
  );
};

export default Loader;
