import React from "react";
import Hero from "../../components/Hero/Hero";
import Food from "../../components/Food/Food";

import a from "../../assets/a.jpg";
import b from "../../assets/b.jpg";
import c from "../../assets/c.jpg";
import d from "../../assets/d.jpg";
import e from "../../assets/e.jpg";
import f from "../../assets/f.jpg";

const dishes = [
  { img: a, name: "Dragon Roll" },
  { img: b, name: "California Roll" },
  { img: c, name: "Nigiri Salmón" },
  { img: d, name: "Sashimi Mixto" },
  { img: e, name: "Uramaki Ebi" },
  { img: f, name: "Tempura Roll" },
];

const HomePage = (props) => {
  return (
    <>
      <Hero />
      <Food dishes={dishes} />
    </>
  );
};

export default HomePage;
