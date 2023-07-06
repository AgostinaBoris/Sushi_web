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
            <label for="nombre">Name</label>
            <input type="text" name="" />
          </p>
          <p>
          {/* CAMPO DE ENTRADA 2 */}
            <label for="mail">Mail</label>
            <input type="text" name="" />
          </p>
          <p>
          {/* CAMPO DE ENTRADA 3 */}
            <label for="telefono">Phone</label>
            <input type="text" name="" />
          </p>
          <p>
          {/* CAMPO DE ENTRADA 4 */}
            <label for="mensaje">Message</label>
            <textarea name=""></textarea>
          </p>
          <p className="acciones">
            <input type="submit" value="Send" />
          </p>
        </form>
      </main>
    </>
  );
};

export default Contact;
