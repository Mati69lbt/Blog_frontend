import { useNavigate } from "react-router-dom";

const Nav_backend = () => {
  const navigate = useNavigate();
  const seleccionador = (e) => {
    switch (e.target.value) {
      case "/":
        navigate("/backend/");
        break;
      case "servidor":
        navigate("/backend/servidor");
        break;
      case "modelos":
        navigate("/backend/modelos");
        break;
      case "articulos":
        navigate("/backend/articulos");
        break;
      case "validar":
        navigate("/backend/validar");
        break;
      case "crear_articulos":
        navigate("/backend/crear_articulos");
        break;
      case "traer_articulos":
        navigate("/backend/traer_articulos");
        break;
      case "borrar_articulo":
        navigate("/backend/borrar_articulo");
        break;
      case "editar_articulo":
        navigate("/backend/editar_articulo");
        break;
      case "subir_imagen":
        navigate("/backend/subir_imagen");
        break;
      case "buscar_articulo":
        navigate("/backend/buscar_articulo");
        break;

      default:
        break;
    }
  };
  return (
    <div className="nav">
      <select name="" id="" onChange={(e) => seleccionador(e)}>
        <option value="/">Backend</option>
        <option value="servidor">Servidor</option>
        <option value="modelos">Modelos</option>
        <option value="articulos">Ruta de articulos</option>
        <option value="validar">Validar Datos</option>
        <option value="crear_articulos">Crear Articulo</option>
        <option value="traer_articulos">Traer Articulos</option>
        <option value="editar_articulo">Editar Articulos</option>
        <option value="borrar_articulo">Borrar Articulos</option>
        <option value="subir_imagen">Subir Imagen</option>
        <option value="buscar_articulo">Buscar Articulo</option>
      </select>
    </div>
  );
};

export default Nav_backend;
