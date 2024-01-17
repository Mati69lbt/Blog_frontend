import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Global from "../../helpers/Global";
import Ajax_helpers from "../../helpers/Ajax_helpers";
import Listado from "./Listado";

const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    conseguir_Articulos();
  }, []);

  const conseguir_Articulos = async () => {
    const url = Global.backend + "articulos";
    setLoading(true);

    const { datos, cargando } = await Ajax_helpers(url, "GET");
    setLoading(cargando);
    /*
    METODO ANTERIOR
    let peticion = await fetch(url, {
      method: "GET",
    }); 
     let datos = await peticion.json(); 
    */

    if (datos.status === "succes") {
      setArticulos(datos.articulos);
    }
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <p className="cargando">
          "Cargando Articulos... Espere unos segunditos..."
        </p>
      ) : articulos.length >= 1 ? (
        <Listado articulos={articulos} setArticulos={setArticulos} />
      ) : (
        <div>
          <h1>
            No hay articulos,{" "}
            <Link to="/crear-articulos" className="button">
              creee uno:
            </Link>
          </h1>
        </div>
      )}
    </>
  );
};

export default Articulos;
