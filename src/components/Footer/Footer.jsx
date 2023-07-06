// COMPONENTE FOOTER O PIE DE PAGINA CON INFORMACION SOBRE LA EMPRESA Y DETALLES DE CONTACTO
// El componente está estructurado en cuatro columnas, cada una con un título y una lista de enlaces a diferentes secciones del sitio web o de la empresa. La última columna muestra los iconos de redes sociales en una fila horizontal.

import React from 'react';
import './Footer.css';
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa';
// se importa react icons 



export const Footer = (props) => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="col">
                <h3>Explore Our Menu</h3>
                <p>Menu</p>
                <p>Nutrition</p>
                <p>Ingredients</p>
                <p>Drink Menu</p>
            </div>
            <div className="col">
                <h3>Get to know us</h3>
                <p>About us</p>
                <p>Franchising</p>
                <p>Mission Statement</p>
                <p>Goals</p>
            </div>
            <div className="col">
                <h3>Get in touch</h3>
                <p>Press</p>
                <p>Careers</p>
                <p>Contact Us</p>
                <p>Get Social</p>
            </div>
            <div>
                <h3>Let's Connect</h3>
                <div className="social">
                    <FaFacebookSquare className='icon' />
                    <FaInstagramSquare className='icon' />
                    <FaTwitterSquare className='icon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;