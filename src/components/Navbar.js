import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navItem"> Fotos </Link>   |  
      <Link to="/favoritos" className="navItem"> Mis fotos favoritas </Link>
    </nav>
  );
}
