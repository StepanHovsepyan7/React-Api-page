import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Cards({imageUrl,title}) {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className='card'data-aos='fade-up' >
        <img className='object-contain h-[300px]' src={imageUrl} alt="" />
        <h3>{title}</h3>
    </div>
  )
}

export default Cards
