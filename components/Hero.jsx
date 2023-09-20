import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#eee] relative overflow-hidden">
      <div className="heroMain max-w-[1200px] m-auto h-full min-h-[90vh] flex  items-center justify-between">
        <div>
          <h1 className="font-extrabold text-[55px] leading-normal max-w-[85%] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-transparent bg-clip-text">
            Grow Your Bussiness With{" "}
            <span className="font-extrabold bg-gradient-to-r from-orange-500 via-red-600 to-red-900 text-transparent bg-clip-text">
              {" "}
              Evertize{" "}
            </span>
            Marketing
          </h1>
          <p className="text-[18px] mb-4 leading-[1.8] text-gray-900 max-w-[90%]">
            We specialize in delivering comprehensive Marketing and Branding
            Solutions tailored to your needs.
          </p>

          <button className="btn"> Contact us </button>
        </div>
        <img
          className="mix-blend-darken w-[500px]"
          src="https://i.pinimg.com/564x/6d/e1/69/6de169ebed183c8f6ce0973f4119dfd3.jpg"
          alt=""
        />
      </div>
      <img
        className="absolute top-[77%] left-[-6%] h-56 animate-pulse"
        src="/overlay.png"
        alt="overlay"
      />
      <img
        className="animateElm absolute top-[75%] left-[55%] mix-blend-multiply h-36"
        src="https://d2pas86kykpvmq.cloudfront.net/landings/squiggel/hero.png"
        alt=""
      />
      {/* <img
        className="absolute top-0 left-0 mix-blend-multiply"
        src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA5L3YxMjMwLTAxNi12LmpwZw.jpg"
        alt=""
      /> */}
    </div>
  );
};

export default Hero;
