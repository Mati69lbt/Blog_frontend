import React from "react";
import { useNavigate } from "react-router-dom";

const Nav_frontend = () => {
  const navigate = useNavigate();
  const seleccionador = (e) => {
    switch (e.target.value) {
      case "/":
        navigate("/frontend/");
        break;
      case "rutas":
        navigate("/frontend/rutas");
        break;
      case "helpers":
        navigate("/frontend/helpers");
        break;
      case "articulos":
        navigate("/frontend/articulos");
        break;
      case "crear":
        navigate("/frontend/crear");
        break;
      case "editar":
        navigate("/frontend/editar");
        break;
      case "buscar":
        navigate("/frontend/buscar");
        break;

      default:
        break;
    }
  };
  return (
    <div className="nav">
      <select name="" id="" onChange={(e) => seleccionador(e)}>
        <option value="/">Frontend</option>
        <option value="rutas">Rutas</option>
        <option value="helpers">Helpers</option>
        <option value="articulos">Articulos</option>
        <option value="crear">Crear Articulo</option>
        <option value="editar">Editar Articulo</option>
        <option value="buscar">Buscar Articulo</option>
      </select>
    </div>
  );
};

export default Nav_frontend;
