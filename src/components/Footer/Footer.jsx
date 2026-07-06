// COMPONENTE FOOTER O PIE DE PAGINA CON INFORMACION SOBRE LA EMPRESA Y DETALLES DE CONTACTO
// El componente está estructurado en columnas: marca, navegación, contacto y redes sociales.

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

export const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className="container">
        <div className="col brand">
          <h2>Akari Sushi</h2>
          <p>Japanese kitchen · Sushi bar · Fresh daily.</p>
        </div>

        <div className="col">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="col">
          <h3>Get in Touch</h3>
          <p>123 Sakura Street, Buenos Aires</p>
          <p>+54 11 5555-0199</p>
          <p>hello@akarisushi.com</p>
        </div>

        <div className="col">
          <h3>Let's Connect</h3>
          <div className="social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookSquare className='icon' />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagramSquare className='icon' />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitterSquare className='icon' />
            </a>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <p>&copy; {year} Akari Sushi. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
