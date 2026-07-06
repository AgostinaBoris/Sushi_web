// Componente Nav

import React, { useEffect, useState } from "react";
import { BiSushi } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = (props) => {
  // El hook useState define dos estados: nav y color.
  // El estado nav se utiliza para determinar si el menú está activo o no. El estado color se utiliza para determinar el color de fondo de la barra de navegación.
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);

  // La función handleNav cambia el estado de nav al hacer clic en el botón de hamburguesa.
  const handleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  // Si la página se desplaza por encima de 100 píxeles, el nav pasa a fondo solido; si no, queda transparente.
  useEffect(() => {
    const changeColor = () => {
      setColor(window.scrollY >= 100);
    };
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <div className={color ? "navbar navbar-bg" : "navbar"}>
      <div className="container">
        <div>
          <BiSushi size={40} style={{ marginLeft: "4px" }} />
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                onClick={closeNav}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
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
