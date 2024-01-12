import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Global from "../../helpers/Global";
import Ajax_helpers from "../../helpers/Ajax_helpers";

import Fecha_Formateada from "../../helpers/Fecha_Formateada";

const Articulo = () => {
  const [articulo, setArticulo] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    conseguir_Articulo();
  }, []);

  const conseguir_Articulo = async () => {
    const url = Global.backend + "articulo/" + params.id;
    const { datos, cargando } = await Ajax_helpers(url, "GET");
    setLoading(cargando);

    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }
    setLoading(false);
  };
  return (
    <div className="jumbo">
      {loading ? (
        "Cargando..."
      ) : (
        <div className="mascara_articulo">
          <div className="mascara">
            {articulo.imagen != "default.png" && (
              <Link to={"/imagen/" + articulo.imagen}>
                <img
                  src={Global.backend + "imagen/" + articulo.imagen}
                  alt="no hay imagen"
                />
              </Link>
            )}
            {articulo.imagen === "default.png" && (
              <img src={Global.not_imagen} alt="no hay imagen" />
            )}
          </div>
          <h1>{articulo.titulo}</h1>
          <p>Creado: {Fecha_Formateada(articulo.fecha)}</p>
          <p className="description">{articulo.contenido}</p>
          <button onClick={() => navigate(-1)}>Volver</button>
        </div>
      )}
    </div>
  );
};

export default Articulo;
