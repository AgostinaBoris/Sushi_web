// Este componente recibe un arreglo de fotos en sus props y utiliza el método map para iterar a través de todas las fotos y crear un elemento <div> para cada foto. Dentro del ciclo map, se crea un <div> para cada foto con una imagen de fondo y una clase de CSS llamada "left". 
// MEJOR CREAR GALERIA EN BASE DE DATOS


import React from "react";
import "./Photos.css";

export const Photos = (props) => {
  return (
    <div className="container">
      {props.photos.map((photo) => {
        return (
          <div
            style={{
              background: `url('${props.bgImg1}') no-repeat center center/cover`,
            }}
            className="left"
          ></div>
        );
      })}
    </div>
  );
};

export default Photos;
