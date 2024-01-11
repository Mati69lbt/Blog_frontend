import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Global from "../../helpers/Global";
import Ajax_helpers from "../../helpers/Ajax_helpers";
import Listado from "./Listado";

const Busqueda = () => {
  const [articulos, setArticulos] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const params = useParams();
  
  useEffect(() => {
    conseguir_Articulos();
  }, []);
  useEffect(() => {
    conseguir_Articulos();
  }, [params]);

  const conseguir_Articulos = async () => {
    const url = Global.url + "buscar/" + params.busqueda;
    const { datos, cargando } = await Ajax_helpers(url, "GET");
    setLoading(cargando);

    if (datos.status === "succes") {
  
      setArticulos(datos.articulo_encontrado);
    } else {
      setArticulos([]);
    }
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        "Cargando..."
      ) : (
        <>
          {articulos.length >= 1 ? (
            <Listado articulos={articulos} setArticulos={setArticulos} />
          ) : (
            <div>
              <h1>
                No hay artículos,{" "}
                <Link to="/crear-articulos" className="button">
                  crea uno
                </Link>
              </h1>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Busqueda;
