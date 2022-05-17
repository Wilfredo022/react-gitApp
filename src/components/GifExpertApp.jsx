import React, { useState } from "react";
import { AddCategories } from "./AddCategories";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["zenitsu"]);

  return (
    <div>
      <h2 className="titulo">Gif-App</h2>

      <AddCategories setCategorias={setCategorias} />
      <hr />

      <ul>
        {categorias.map((categoria) => {
          return <GifGrid key={categoria} categoria={categoria} />;
        })}
      </ul>
    </div>
  );
};

export default GifExpertApp;
