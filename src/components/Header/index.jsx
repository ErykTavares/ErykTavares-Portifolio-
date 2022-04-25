import React from "react";
import { NavLink } from "react-router-dom";
import Line from "../Line";
import { HeaderStyle } from "./style";
import { ReactComponent as Mobile } from "../../assets/svg/MenuMobile.svg";
import Button from "../Buttons/index";
import MenuMobile from "./MobileMenu/index";

function Header() {
  const [menumobile, setMenuMobile] =
    React.useState(false);

  const navlinks = (
    <ul>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/sobre">Sobre</NavLink>
      </li>
      <li>
        <NavLink to="/experiencia">
          Expêriencia
        </NavLink>
      </li>
      <li>
        <NavLink to="/projetos">
          Projetos
        </NavLink>
      </li>
    </ul>
  );

  function handleClick() {
    setMenuMobile(!menumobile);
  }

  return (
    <HeaderStyle>
      <div className="HeaderContent">
        <NavLink to="/home">
          <h1>ErykTavares</h1>
        </NavLink>
        <Button
          bgcolor="transparent"
          width="30"
          height="30"
          // eslint-disable-next-line
          onClick={handleClick}
        >
          <Mobile
            className={
              menumobile
                ? "btn-menu active"
                : "btn-menu disabled"
            }
          />
        </Button>
        <nav className="desktopMenu">
          {navlinks}
        </nav>
        <MenuMobile active={menumobile}>
          {navlinks}
        </MenuMobile>
      </div>
      <Line />
    </HeaderStyle>
  );
}

export default Header;
