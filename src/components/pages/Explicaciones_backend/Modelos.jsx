import React from "react";

const Modelos = () => {
  return (
    <div className="explicaciones">
      <h1>Modelos de Tablas</h1>
      <ul>
        <li>
          <p>Crear un modelo modelos\Articulo.js</p>
          <pre>
            <code>{` const { Schema } = require("mongoose");

const ArticuloSchema = Schema({
  titulo: { type: String, required: true },
  contenido: {
    type: String,
    required: true,
  },

  fecha: {
    type: Date,
    default: Date.now(),
  },
  imagen: {
    type: String,
    default: "default.png",
  },
});

module.exports = model("Articulo", ArticuloSchema, "articulos");`}</code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Modelos;
