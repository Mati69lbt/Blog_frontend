import React from "react";

const Busqueda = () => {
  return (
    <div className="explicaciones">
      <h1>Buscar articulos</h1>
      <ul>
        <li>
          <p>Componente Buscar</p>
          <pre>
            <code>{`
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
            `}</code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Busqueda;
