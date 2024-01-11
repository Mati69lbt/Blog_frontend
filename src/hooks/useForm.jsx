import { useState } from "react";

const useForm = (obejtoInicial = {}) => {
  const [formulario, setFormulario] = useState(obejtoInicial);

  const serializarFormulario = (formulario) => {
    const formData = new FormData(formulario);
    const objetoCompleto = {};
    for (let [name, value] of formData) {
      objetoCompleto[name] = value;
    }
    return objetoCompleto;
  };

  const enviado = (e) => {
    e.preventDefault();
    let curso = serializarFormulario(e.target);
    setFormulario(curso);
  };

  const cambiado = ({ target }) => {
    const { name, value } = target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
  return { formulario, enviado, cambiado };
};

export default useForm;
