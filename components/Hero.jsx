import React from "react";
import Lottie from "lottie-react";
import heroJson from "@/public/hero.json";

const Hero = () => {
  return (
    <div className="bg-[#eee] z-10 relative overflow-hidden">
      <div className=" max-w-[1200px] px-2 m-auto mt-20 h-full min-h-[100vh] flex items-center justify-center flex-col lg:flex-row lg:mt-2">
        <div className="px-4 lg:px-0 lg:w-1/2">
          <h1 className="font-extrabold text-[23px] my-2 lg:text-[45px] max-w-[100%] leading-normal bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-transparent bg-clip-text lg:max-w-[80%]">
            <span className="font-extrabold text-[#FA7909]"> EVERTIZE </span>
            Your Strategic Partner in Marketing Success
          </h1>
          <p className="mb-4 leading-[1.4] text-gray-900 text-sm w-full lg:max-w-[60%]">
            We specialize in delivering comprehensive Marketing and Branding
            Solutions tailored to your needs.
          </p>
          <button className="btn"> Contact us </button>
        </div>
        <div className="w-full lg:w-1/2">
          <Lottie animationData={heroJson} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
