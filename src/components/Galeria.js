import "../assets/css/galeria.css";
import Heart from "./Heart";
import React from "react";
import Context from "../Context";
import { useContext } from "react";

export default function Galeria() {
  const { pictures, setPictures } = useContext(Context);

  const setFavourite = (id) => {
    const photoIndex = pictures.findIndex((e) => e.id === id);
    pictures[photoIndex].favourite = !pictures[photoIndex].favourite;
    setPictures([...pictures]);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {pictures.map((e, i) => (
        <div
          onClick={() => setFavourite(e.id)}
          className="foto"
          style={{ backgroundImage: `url(${e.src})` }}
          key={i}
        >
          <Heart filled={e.favourite} />
          <p className="descripcion">{e.desc}</p>
        </div>
      ))}
    </div>
  );
}
