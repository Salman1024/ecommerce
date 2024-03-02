import React, { useEffect, useState } from "react";
import toy from '../../../assets/toy.jpg'
import living from '../../../assets/living.jpg'
import dog from '../../../assets/dog.jpg'



const HeroBanner = () => {

  const images=[toy,living,dog];

  const [currentImage,setCurrentImage]=useState(0);
  const length=images.length;

  useEffect(()=>{
    const interval=setInterval(()=>
    {
      setCurrentImage((prevIndex) =>(prevIndex === length -1 ? 0 : prevIndex + 1)   )
    },8000);
    return ()=> clearInterval(interval)
  },[])


  return (
    <>
      <div className="banner relative">
        <img className="w-full h-auto object-cover object-center " src={images[currentImage]} alt="banner-image" />
        
      </div>
    </>
  );
};

export default HeroBanner;
