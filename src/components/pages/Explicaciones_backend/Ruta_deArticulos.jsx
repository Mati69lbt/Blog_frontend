import React from "react";

const Ruta_deArticulos = () => {
  return (
    <div className="explicaciones">
      <h1>Ruta de los Articulos</h1>
      <ul>
        <li>
          <p>Crear un controlador </p>
          <p>controladores\Articulo.js</p>
          <pre>
            <code>
              {`
  const prueba = (req, res) => {
    return res.satus(200).json({
    mensaje: "Soy una accion de prueba en mi controlador de articulos",
  });
};

module.exports = {
  prueba,
};
              `}
            </code>
          </pre>
        </li>
        <li>
          <p>Crear Ruta rutas\Articulos.js</p>
          <pre>
            <code>
              {`
const { Router } = require("express");
const router = Router();

const ArticuloControlador = require("../controladores/Articulo");

//Rutas de prueba
router.get("/ruta-de-prueba", ArticuloControlador.prueba);

module.exports = router;
              `}
            </code>
          </pre>
        </li>
        <li>
          <p>Definir y hacer q funciones las rutas index.js</p>
          <pre>
            <code>{`
//Rutas
const rutas_articulo = require("./rutas/Articulos")

//Cargar las rutas
app.use("/api", rutas_articulo);

            
            `}</code>
          </pre>
        </li>
        <li>
          <p>EJEMPLO PRACTICO</p>
          <pre>
            <code>{`
controladores\Articulo.js
const crear_articulo = (req, res) => {
  return res.status(200).json({
    mensaje: "Accion de guardar"
  })
};

module.exports = {
  crear_articulo,
};


const ArticuloControlador = require("../controladores/Articulo");
router.post("/crear", ArticuloControlador.crear_articulo);

sigue igual que antes
//Rutas
const rutas_articulo = require("./rutas/Articulos")
//Cargar las rutas
app.use("/api", rutas_articulo);
          `}</code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Ruta_deArticulos;
