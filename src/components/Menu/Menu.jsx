// Componente Menu renderiza el acceso al menú con dos botones.
// El componente Menu está formado por una estructura de contenedores HTML con clases CSS que se utilizan para aplicar estilos a los elementos. Dentro del contenedor de la clase .container se encuentra un elemento span que contiene el texto "Explore our menus!" y dos elementos button con la clase CSS .boton. Cada botón tiene un texto diferente: "Take Away" y "Salon".

import React from "react";
import "./Menu.css";

const Menu = (props) => {
  return (
    <div className="menu">
      <div className="container">
        <div className="text">
          <span>Explore our menu!</span>
        </div>

        <button className="boton" href="#">
          Take Away
        </button>
      </div>
    </div>
  );
};

export default Menu;
