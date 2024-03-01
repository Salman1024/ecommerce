import React from "react";
import SkinCare from "../../../assets/skin care.jpg";


const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <div className="dropImage ">
        <img className="h-full max-h-[70vh] w-full object-cover object-center" src={SkinCare} alt="" />
      </div>
        <p>Hello banner</p>
    </div>
  );
};

export default HeroBanner;
