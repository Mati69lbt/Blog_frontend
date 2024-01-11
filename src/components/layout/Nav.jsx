import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
 const seleccionador = (e) => {
  switch (e.target.value) {
    case "backend":
      navigate("/backend")
      break;
    case "frontend":
      navigate("/frontend");
      break;
  
    default:
      break;
  }
 }
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/Inicio">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/articulos">Articulos</NavLink>
        </li>
        <li>
          <NavLink to="/crear-articulos">Crear Articulos</NavLink>
        </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
        <li>
          <select name="" id="" onChange={(e) => seleccionador(e)}>
            <option value="">Codigos</option>
            <option value="backend">Backend</option>
            <option value="frontend">Frontend</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
