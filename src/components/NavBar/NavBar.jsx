import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <Link to="/">Inicio </Link>
        <Link to="/curso">Curso</Link>
        <Link to="/category/programacion">Programación💻</Link>
        <Link to="/category/diseño">Diseño🖌</Link>
        <CartWidget />
      </ul>
    </div>
  );
}

export default NavBar;
