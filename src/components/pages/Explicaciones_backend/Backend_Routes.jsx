import { Route, Routes } from "react-router-dom";
import Index_BackEnd from "./Index_BackEnd";
import Conectar_Servidor from "./Conectar_Servidor";
import Nav_backend from "./Nav_backend";
import Modelos from "./Modelos";
import Ruta_deArticulos from "./Ruta_deArticulos";
import Validar from "./Validar";
import Crear_articulos from "./Crear_articulos";
import Traer_Articulos from "./Traer_Articulos";
import Borrar_Articulo from "./Borrar_Articulo";
import Editar_Articulo from "./Editar_Articulo";
import Subir_Imagen from "./Subir_Imagen";
import Buscar_Articulo from "./Buscar_Articulo";

const Backend_Routes = () => {
  return (
    <div className="jumbo">
      <Nav_backend />
      <section>
        <Routes>
          <Route path="/" element={<Index_BackEnd />} />
          <Route path="/servidor" element={<Conectar_Servidor />} />
          <Route path="/modelos" element={<Modelos />} />
          <Route path="/articulos" element={<Ruta_deArticulos />} />
          <Route path="/validar" element={<Validar />} />
          <Route path="/crear_articulos" element={<Crear_articulos />} />
          <Route path="/traer_articulos" element={<Traer_Articulos />} />
          <Route path="/editar_articulo" element={<Editar_Articulo />} />
          <Route path="/borrar_articulo" element={<Borrar_Articulo />} />
          <Route path="/subir_imagen" element={<Subir_Imagen />} />
          <Route path="/buscar_articulo" element={<Buscar_Articulo />} />
        </Routes>
      </section>
    </div>
  );
};

export default Backend_Routes;
