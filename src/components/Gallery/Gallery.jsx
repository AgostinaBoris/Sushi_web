// Componente Gallery representa una seccion de la galeria de imagenes.
// El componente está estructurado en tres niveles de elementos HTML anidados dentro de un contenedor principal con la clase CSS 'gallery'.


import React from "react";
import "./Gallery.css";



export const Gallery = (props) => {
  return (
    <div className="gallery">
      <div className="container">
        <div className="content">
          <div className="text">
            <span>Take a look!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
