import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [menumobile, setMenuMobile] = React.useState(null);
  const [animatemenu, setAnimateMenu] = React.useState(false);

  function handleClick() {
    if (menumobile == null) {
      setMenuMobile(true);
      setAnimateMenu(true);
    }

    if (animatemenu) {
      setAnimateMenu(false);
    }

    if (menumobile) {
      setTimeout(() => setMenuMobile(null), 1000);
    }
  }

  return (
    <>
      <header>
        <Link to="/">
          <h1>ErykTavares</h1>
        </Link>
        <button className="btnTogglemenu" onClick={() => handleClick()}>
          <i
            className="bi bi-list"
            style={menumobile ? { color: "#780206" } : { color: "white" }}
          ></i>
        </button>
        <Menu />
        <MenuMobile menumobile={menumobile} animatemenu={animatemenu} />
      </header>
      <div className="line"></div>
    </>
  );
};

export default Header;
