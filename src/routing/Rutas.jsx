import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../components/pages/Inicio";
import Articulos from "../components/pages/Articulos";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Crear from "../components/pages/Crear";
import Contacto from "../components/pages/Contacto";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import Busqueda from "../components/pages/Busqueda";
import Articulo from "../components/pages/Articulo";
import Editar from "../components/pages/Editar";
import Backend_Routes from "../components/pages/Explicaciones_backend/Backend_Routes";
import Frontend_Routes from "../components/pages/Explicaciones_frontend/Frontend_Routes";
import Imagen from "../components/pages/Imagen";

const Rutas = () => {
  return (
    <BrowserRouter>
      {/* LAYOUT */}
      <Header />
      <Nav />

      {/* Contenido central y rutas */}
      <section id="content" className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/crear-articulos" element={<Crear />} />
          <Route path="/buscar/:busqueda" element={<Busqueda />} />
          <Route path="/articulo/:id" element={<Articulo />} />
          <Route path="/editar/:id" element={<Editar />} />
          <Route path="/imagen/:nombre" element={<Imagen />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/backend/*" element={<Backend_Routes />} />
          <Route path="/frontend/*" element={<Frontend_Routes />} />

          <Route
            path="*"
            element={
              <div className="Jumbo">
                <h1>Error 404</h1>
                <h1>Pagina No Encontrada</h1>
              </div>
            }
          />
        </Routes>
      </section>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
};

export default Rutas;
