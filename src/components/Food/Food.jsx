// Componente Food representa una sección de la página web que muestra varias imágenes de alimentos.

import React from "react";
import "./Food.css";

export const Food = (props) => {
  return (
    <div
      style={{
        background: `url('${props.bgImg}') no-repeat center center/cover`,
      }}
      className="food"
    >
      <div className="container">
        <div
          style={{
            background: `url('${props.bgImg1}') no-repeat center center/cover`,
          }}
          className="left"
        ></div>
        <div
          style={{
            background: `url('${props.bgImg2}') no-repeat center center/cover`,
          }}
          className="right"
        ></div>
        <div
          style={{
            background: `url('${props.bgImg3}') no-repeat center center/cover`,
          }}
          className="left2"
        ></div>
        <div
          style={{
            background: `url('${props.bgImg4}') no-repeat center center/cover`,
          }}
          className="right2"
        ></div>

      </div>
    </div>
  );
};

export default Food;
