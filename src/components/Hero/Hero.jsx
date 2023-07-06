// Compoennte Hero representa una seccion destacada de la página
// incluye un título, el nombre de la empresa, y botones para pedidos de entrega o para llevar.

import React from "react";
import "./Hero.css";

export const Hero = (props) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="text">
            <p>Always</p>
          </div>

          <span>Wampas</span>
          <br></br>
          <span>Sushi</span>
          <br></br>
          <br></br>
          <button className="btn">Delivery</button>
          <button className="btn">Take-out</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
