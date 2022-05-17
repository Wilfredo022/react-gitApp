import React, { useState } from "react";
import propTypes from "prop-types";

export const AddCategories = ({ setCategorias }) => {
  const [valor, setValor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valor.trim().length > 2) {
      setCategorias((categorias) => [valor, ...categorias]);
      setValor("");
    } else {
      console.log("El campo debe tener mas de 2 letras");
    }
  };

  const handleInput = (e) => {
    setValor(e.target.value);
  };

  return (
    <>
      <h2>Agregar categoria</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="buscar"
          value={valor}
          onChange={handleInput}
          placeholder="Buscar Gif"
        />
        <button>Agregar</button>
      </form>
    </>
  );
};

AddCategories.propTypes = {
  setCategorias: propTypes.func.isRequired,
};
