import React, { useState } from "react";
import "./styles/Header.scss";
import { Link } from "react-router-dom";
import logo from "./assets/logos/logo.jpg";
import menu from "./assets/icons/icon_menu.svg";
import shoppingCart from "./assets/icons/icon_shopping_cart.svg";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className={click ? "nav-women1" : "nav-women"}>
      <div onClick={handleClick}>
        <img src={menu} alt="menu" className="menu" />
      </div>

      <img src={logo} alt="logo" className="logo-nav" />

      <div className={click ? "navbar-left active" : "navbar-left"}>
        <ul>
          <li>
            <Link to="/men-top-list">best selling clothes</Link>
          </li>
          <li>
            <Link to="/men-top-list/all-clothes">AllClothes</Link>
          </li>
          <li>
            <Link to="/men-top-list/recommended-clothes">Recommended Clothes</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email">@example.com</li>
          <li className="navbar-shopping-cart">
            <Link to="/login">Iniciar session</Link>
          </li>
          <li className="navbar-shopping-cart">
            <img src={shoppingCart} alt="shopping cart" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;