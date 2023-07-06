import React from "react";
import Hero from "../../components/Hero/Hero";
import Food from "../../components/Food/Food";

import a from "../../assets/a.avif";
import b from "../../assets/b.avif";
import c from "../../assets/c.avif";
import d from "../../assets/d.avif";


const HomePage = (props) => {
  return (
    <>
      <Hero />
      <Food bgImg1={a} bgImg2={b} bgImg3={c} bgImg4={d} 
      
      />
    </>
  );
};

export default HomePage;
