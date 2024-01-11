import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="jumbo">
      <h1>Bienvenido al Blog con React</h1>
      <p>
        Este es un proyecto de blog utilizando MERN Stack (Mongom, Express,
        React, Node)
      </p>
      <Link to="/articulos" className="button">
        Ver Articulos
      </Link>
    </div>
  );
};

export default Inicio;
