import React from "react";

const Ceo = () => {
  return (
    <div className="ceo-main bg-[#D9D7F1] rounded-full h-[300px] mb-10 max-w-[1200px] m-auto">
      <div className="ceo-img">
        <div>
          Meat Our <br /> <span>CEO</span>
        </div>
        <img src="/profile.png" alt="" />
      </div>
      <div className="ceo-info">
        <h1>
          <img className="qouteImg" src="https://edify.pk/images/ceoQuoteMark.webp" alt="" />
          We Believe Marketing Doesn't Have to Be Expensive or Complicated, <br />
          Rather, It Should Be Smart & Targeted
        </h1>
        <span> - Mr. Saif UL Rehman</span>
      </div>
    </div>
  );
};

export default Ceo;
