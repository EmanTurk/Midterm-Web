import React from "react";
import "./Navbar.css";
import logo from "../Assets/GLIMMIx.png";
import cart_icon from "../Assets/cart_icon.png";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} width={65} height={65} alt="" />
      </div>
      <ul className="nav-menu">
        <li>Shop <hr /></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Loging</button>
        <img src={cart_icon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
