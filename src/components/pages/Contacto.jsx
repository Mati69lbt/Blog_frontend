import React from "react";
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div className="jumbo">
      <h2>Contacto</h2>
      <p>¡Hola! Soy Matias Delgado, desarrollador web de Paraná, Entre Ríos.</p>
      <p>Puedes encontrarme en las siguientes redes:</p>
      <ul>
        <li>
          <strong>Correo:</strong> mati69_lbt@hotmail.com
        </li>
        <li>
          <strong>Portfolio:</strong>{" "}
          <Link to="https://matiasdelgado.onrender.com/" target="_blank">
            Portfolio
          </Link>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <Link to="https://github.com/Mati69lbt" target="_blank">
            GitHub
          </Link>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <Link
            to="https://www.linkedin.com/in/matiasdelgadodev/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contacto;
