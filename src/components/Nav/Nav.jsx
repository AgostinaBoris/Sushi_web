// Componente Nav 

import React, { useState } from "react";
import { BiSushi } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";


const Navbar = (props) => {
  // El hook useState define dos estados: nav y color.
  // El estado nav se utiliza para determinar si el menú está activo o no. El estado color se utiliza para determinar el color de fondo de la barra de navegación.
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);

  // La función handleNav cambia el estado de nav al hacer clic en el botón de hamburguesa.
  const handleNav = () => setNav(!nav);


  // La función changeColor cambia el estado de color dependiendo del desplazamiento de la página.
  // Si la página se desplaza por encima de 100 píxeles, el estado color cambia a true, lo que hace que el fondo de la barra de navegación se vuelva transparente. De lo contrario, el estado color cambia a false, lo que hace que el fondo de la barra de navegación se vuelva opaco.
  // se agrega un evento "scroll" al objeto window que llama a la función changeColor para cambiar el color de la barra de navegación en función del desplazamiento de la página.
  const changeColor = () => {
    if (typeof window !== "undefined" && window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    // Devuelve un div que contiene un div con la clase "container". Dentro de este div hay un logo de BiSushi y una lista ul que contiene los enlaces a las diferentes páginas del sitio web. Si el menú está activo, se agrega la clase "active" a la lista ul. También hay un botón de hamburguesa que se utiliza para activar y desactivar el menú en dispositivos móviles.
    
    <div className={color ? "navbar navbar-bg" : "navbar"}>
      <div className="container">
        <div>
          <BiSushi size={40} style={{ marginLeft: "4px" }} />
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link exact to="/">Home</Link>
          </li>|
          <li>
            <Link exact to="/menu">Menu</Link>
          </li>
          <li>
            <Link exact to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link exact to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {nav ? (
            <FaTimes size={20} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
