import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Context from "./Context";
import { useState, useEffect } from "react";

export default function App() {

  const [pictures, setPictures] = useState([]);

  const defaultEndpoint = "/fotos.json";

  const galleryPictures = async () => {
    const response = await fetch(defaultEndpoint);
    const data = await response.json();

    let filteredData = data.photos.map((e) => ({
      id: e.id,
      src: e.src.medium,
      desc: e.alt,
      favourite: false,
    }));
    
    setPictures(filteredData);
  };

  useEffect(() => {
    galleryPictures();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{ pictures, setPictures }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
