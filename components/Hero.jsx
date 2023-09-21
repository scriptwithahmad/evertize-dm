import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#eee] z-10 relative overflow-hidden">
      <div className="heroMain max-w-[1200px] m-auto h-full min-h-[90vh] flex  items-center justify-between">
        <div>
          <h1 className="font-extrabold text-[55px] leading-normal max-w-[90%] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-transparent bg-clip-text">
            Grow Your Bussiness With{" "}
            <span className="font-extrabold text-[#FA7909]"> EVERTIZE </span>
            Marketing
          </h1>
          <p className="text-[18px] mb-4 leading-[1.8] text-gray-900 max-w-[75%]">
            We specialize in delivering comprehensive Marketing and Branding
            Solutions tailored to your needs.
          </p>
          <button className="btn"> Contact us </button>
        </div>
        <img
          className="mix-blend-darken w-[430px] relative z-[3333333333333333333]"
          // className="mix-blend-darken w-[500px]"
          // src="https://i.pinimg.com/564x/6d/e1/69/6de169ebed183c8f6ce0973f4119dfd3.jpg"
          src="/heroshape.png"
          alt="hero image"
        />
      </div>
      <img
        className="hero-svg-1 absolute top-[77%] left-[-6%] h-56 animate-pulse"
        src="/overlay.png"
        alt="overlay"
      />
      {/* <div className="Hero-img-shape absolute top-[20%] right-24 z-[-1] shadow-2xl rounded-full bg-white h-72 w-72"></div> */}
      <img
        className="hero-svg-2 animateElm absolute top-[75%] left-[55%] mix-blend-multiply h-36"
        src="https://d2pas86kykpvmq.cloudfront.net/landings/squiggel/hero.png"
        alt=""
      />
    </div>
  );
};

export default Hero;
