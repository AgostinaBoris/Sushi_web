// COMPONENTE CONTACT: formulario de contacto

import React from "react";
import "./Contact.css";


const Contact = (props) => {
  return (
    // El componente devuelve un bloque de elementos JSX que representan el formulario de contacto HTML. 
    <>
      {/* CONTENEDOR DEL FORMULARIO */}
      <main className="holder">
        <h2>Contact us!</h2>
        <form action="" method="" className="formulario">
          <p>
            {/* CAMPO DE ENTRADA 1 */}
            <label htmlFor="nombre">Name</label>
            <input type="text" id="nombre" name="nombre" />
          </p>
          <p>
          {/* CAMPO DE ENTRADA 2 */}
            <label htmlFor="mail">Mail</label>
            <input type="email" id="mail" name="mail" />
          </p>
          <p>
          {/* CAMPO DE ENTRADA 3 */}
            <label htmlFor="telefono">Phone</label>
            <input type="tel" id="telefono" name="telefono" />
          </p>
          <p>
          {/* CAMPO DE ENTRADA 4 */}
            <label htmlFor="mensaje">Message</label>
            <textarea id="mensaje" name="mensaje"></textarea>
          </p>
          <p className="acciones">
            <input type="submit" value="Send" className="btn" />
          </p>
        </form>
      </main>
    </>
  );
};

export default Contact;
