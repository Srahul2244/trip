import React, { useEffect } from "react";
import Cards from "../Cards/Cards";
import Hero from "../HerSection/Hero";

const Landing = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <Hero/>
      <Cards/>
    </div>
  );
};

export default Landing;
