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
