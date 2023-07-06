import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";

import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MenuPage from "./pages/MenuPage/MenuPage.jsx";
import GalleryPage from "./pages/GalleryPage/GalleryPage.jsx";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        {/* las rutas de frontend son las URL que el usuario escribe en el navegador web y que el navegador usa para solicitar una página web al servidor. Estas rutas suelen ser manejadas por el frontend de la aplicación y se utilizan para renderizar diferentes vistas y componentes en la interfaz de usuario. */}
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          {/* <Route path="/reservation" element={<Reservation />} />  */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
