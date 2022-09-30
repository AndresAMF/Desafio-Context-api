import React from "react";
import Context from "../Context";
import { useContext } from "react";
import "../assets/css/galeria.css";

export default function Favoritos() {
  const { pictures, setPictures } = useContext(Context);

  const deleteFavourite = (id) => {
    const photoIndex = pictures.findIndex((e) => e.id === id);
    pictures[(photoIndex.favourite = !pictures[photoIndex].favourite)];
    setPictures([...pictures]);
  };

  return (
    <div>
      <h1>Fotos Favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {pictures
          .filter((e) => e.favourite)
          .map((e, i) => (
            <div
              onClick={() => deleteFavourite(e.id)}
              className="foto"
              style={{ backgroundImage: `url(${e.src})` }}
              key={i}
            >
              <p className="foto_descripcion">{e.desc}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
