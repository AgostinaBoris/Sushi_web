// Componente Food representa una seccion de la pagina que muestra los platos destacados.
// Cada plato es una tarjeta con imagen de fondo; al pasar el mouse aparece el nombre con un efecto de zoom.

import React from "react";
import "./Food.css";

export const Food = ({ dishes = [] }) => {
  return (
    <div className="food">
      <div className="container">
        {dishes.map((dish) => (
          <div className="dish-card" key={dish.name}>
            <div
              className="dish-img"
              style={{
                background: `url('${dish.img}') no-repeat center center/cover`,
              }}
            ></div>
            <div className="dish-overlay">
              <span className="dish-name">{dish.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
