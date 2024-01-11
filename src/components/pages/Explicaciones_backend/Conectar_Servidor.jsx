import React from "react";

const Conectar_Servidor = () => {
  return (
    <div className="explicaciones">
      <h1>Conectarse a un servidor</h1>
      <ul>
        <li>
          <p>Nos conectamos a mongoose</p>
          <pre>
            <code>{`  const mongoose = require("mongoose");`}</code>
          </pre>
        </li>
        <li>
          <p>Tambien hacemos la conexion con mongo y lo exportamos </p>
          <pre>
            <code>
              {`
  const conexion = async () => {
    try {
      await mongoose.connect(
        mongodb+srv://mati69lbt:*********@cluster0.aitgwd6.mongodb.net/mi_blog
      );

      console.log("Conectado Exitosamente a la Base de Datos de mi_blog!!!");
    } catch (error) {
      console.log(error);
      throw new Error("No se pudo conectar a la Base de Datos");
    }
  };
  module.exports = {
  conexion,
    };`}
            </code>
          </pre>
        </li>
        <li>
          <p>Creamos el script con nodemon</p>
          <pre>
            <code>{` 
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "nodemon index.js"
},`}</code>
          </pre>
        </li>
        <li>
          <p>pruebas de funcionamiento</p>
          <pre>
            <code>{` 
const { conexion } = require("./database/conexion");

console.log("App de Node Arrancando");

conexion();

En la consola ponemos: $ npm start

[nodemon] starting node index.js
App de Node Arrancando
Conectado Exitosamente a la Base de Datods de mi_blog!!!
    `}</code>
          </pre>
        </li>
        <li>
          <p>Crear un servidor de node</p>
          <pre>
            <code>{`
const express = require("express");

const app = express();

//Configurar cors
const cors = require("cors");app.use(cors())

//Convertir body a objeto js
app.use(express.json()); //recibir datos con content-type app/json
app.use(express.urlencoded({extended:true})) //facilita la manipulación de datos de formulario codificados en URL enviados a tu aplicación, permitiéndote acceder a ellos de manera más sencilla en tu código.
            `}</code>
          </pre>
        </li>
        <li>
          <p>Crear servidor y escuchar peticiones http</p>
          <pre>
            <code>{`
const puerto = 3900
app.listen(puerto, () => console.log("Server Listening on port " + puerto));`}</code>
          </pre>
        </li>
        <li>
          <p>ejemplo de ruta get</p>
          <pre>
            <code>{`
app.get("/probando", (req, res) => {
  console.log("Se ejecuto el endpoint probando");
  return res.status(200).send(
  <div>
  <h1>Probando ruta node.js</h1>
  <p>Crando api Res</p>
  <ul>
  <li>React</li>
  <li>JS</li>
  <li>Express</li>
  </ul>
  </div>
  )
});
`}</code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Conectar_Servidor;
