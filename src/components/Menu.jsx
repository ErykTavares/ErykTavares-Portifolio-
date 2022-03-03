import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Menu.css"

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={({isActive})=> isActive ? "navLink active" : "navLink"}  to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/Sobre">
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/Experiencia">
            Experiência
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/Projetos">
            Projetos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
