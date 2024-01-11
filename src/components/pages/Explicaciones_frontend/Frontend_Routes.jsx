import React from "react";
import Nav_frontend from "./Nav_frontend";
import { Route, Routes } from "react-router-dom";
import Index_FrontEnd from "./Index_FrontEnd";
import Rutas from "./Rutas";
import Helpers from "./Helpers";
import Articulos from "./Articulos";
import Crear from "./Crear";
import Editar from "./Editar";
import Busqueda from "./Busqueda";

const Frontend_Routes = () => {
  return (
    <div className="jumbo">
      <Nav_frontend />
      <section>
        <Routes>
          <Route path="/" element={<Index_FrontEnd />} />
          <Route path="/rutas" element={<Rutas />} />
          <Route path="/helpers" element={<Helpers />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/crear" element={<Crear />} />
          <Route path="/editar" element={<Editar />} />
          <Route path="/buscar" element={<Busqueda />} />
        </Routes>
      </section>
    </div>
  );
};

export default Frontend_Routes;
