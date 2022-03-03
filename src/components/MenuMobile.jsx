import React from "react";
import { NavLink } from "react-router-dom";
import "../css/MenuMobile.css";

const MenuMobile = ({ menumobile, animatemenu }) => {
  if (menumobile == null) {
    return null
  } else {
    return (
      <nav
        className={
         animatemenu ? "menuMobile activemenu" : "menuMobile disablemenu"
        }
      >
        <ul>
          <li>
           <NavLink className={({isActive})=> isActive? "navLink active" : "navLink"} to="/">
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
  }
};

export default MenuMobile;
