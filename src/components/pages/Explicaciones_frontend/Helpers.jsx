import React from "react";

const Helpers = () => {
  return (
    <div className="explicaciones">
      <h1>Helpers</h1>
      <ul>
        <li>
          <p>Este componente facilita la realización de solicitudes HTTP</p>
          <pre>
            <code>
              {`
const Ajax_helpers = async (
  url,
  metodo,
  datosGuardar = "",
  archivos = false
) => {
  let cargando = true;

  let opciones = {
    method: "GET",
  };

  if (metodo == "GET" || metodo == "DELETE") {
    opciones = {
      method: metodo,
    };
  }

  if (metodo == "POST" || metodo == "PUT") {
    if (archivos) {
      opciones = {
        method: metodo,
        body: datosGuardar,
      };
    } else {
      let body = JSON.stringify(datosGuardar);
      opciones = {
        method: metodo,
        body,
        headers: {
          "Content-Type": "application/json",
        },
      };
    }
  }

  const peticion = await fetch(url, opciones);
  const datos = await peticion.json();

  cargando = false;

  return { datos, cargando };
};

export default Ajax_helpers;

            `}
            </code>
          </pre>
        </li>
        <li>
          <p>Fecha Formateada</p>
          <pre>
            <code>{`
const Fecha_Formateada = (fecha) => {
  const dateObj = new Date(fecha);

  const opciones = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const fechaFormateada = dateObj.toLocaleDateString("es-ES", opciones);

  return fechaFormateada;
};

export default Fecha_Formateada;

          `}</code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Helpers;
