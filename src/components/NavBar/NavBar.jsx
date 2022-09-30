import React from "react"; 
import "./NavBar.css";
import  CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav className="nav">
            <p>Logo</p>
            <div className="nav2">
                <a href="#">Nuevos Cursos</a>
                <a href="#">Carreras</a>
                <a href="#">Ofertas</a>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;