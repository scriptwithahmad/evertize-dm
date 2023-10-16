import React from "react";
import Lottie from "lottie-react";
import anime from "@/public/anime.json"
import fb from "@/public/fb.json"
import insta from "@/public/insta.json"

const Hero = () => {
  return (
    <div className="bg-[#eee] z-10 relative overflow-hidden">
      <div className=" max-w-[1200px] m-auto h-full min-h-[100vh] flex items-center justify-center">
        <div className="w-1/2 ">
          <h1 className="font-extrabold text-[45px] leading-normal max-w-[80%] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-transparent bg-clip-text">
            <span className="font-extrabold text-[#FA7909]"> EVERTIZE </span>
            Your Strategic Partner in Marketing Success
          </h1>
          <p className="mb-4 leading-[1.4] text-gray-900 max-w-[60%]">
            We specialize in delivering comprehensive Marketing and Branding
            Solutions tailored to your needs.
          </p>
          <button className="btn"> Contact us </button>
        </div>
        <div className="relative w-1/2  ">
          <Lottie  animationData={anime}/>
          <Lottie className="absolute top-0 left-[15%] w-1/3" animationData={fb}/>
          <Lottie className="absolute bottom-[20%] -z-30 right-[25%] bordef border-red-600  w-[5vw]" animationData={insta}/>

        </div>
      </div>
      <img
        className="hero-svg-1 absolute top-[77%] left-[-6%] h-56 animate-pulse"
        src="/overlay.png"
        alt="overlay"
      />
      <img
        className="hero-svg-2 animateElm absolute top-[75%] left-[55%] mix-blend-multiply h-36"
        src="https://d2pas86kykpvmq.cloudfront.net/landings/squiggel/hero.png"
        alt=""
      />
    </div>
  );
};

export default Hero;
