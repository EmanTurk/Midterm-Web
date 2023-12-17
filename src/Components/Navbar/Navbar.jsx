import React from "react";
import {useState} from "react";
import "./Navbar.css";
import logo from "../Assets/GLIMMIx.png";
import cart_icon from "../Assets/cart_icon.png";
export const Navbar = () => {
    const [menu,setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} width={90} height={90} alt="" />
      </div>
      <ul className="nav-menu">
        {/* <li onClick={()=> {setMenu("shop")}}>Shop {menu==="shop"? <hr/> : <></>}</li>
        <li onClick={()=> {setMenu("men")}}>Men {menu==="men"? <hr/> : <></>} </li>
        <li onClick={()=> {setMenu("women")}}>Women  {menu==="women"? <hr/> : <></>}</li>
        <li onClick={()=> {setMenu("kids")}}>Kids {menu==="kids"? <hr/> : <></>}</li> */}
        <li className={menu === "shop" ? "active" : ""} onClick={() => setMenu("shop")}>Shop</li>
        <li className={menu === "men" ? "active" : ""} onClick={() => setMenu("men")}>Men</li>
        <li className={menu === "women" ? "active" : ""} onClick={() => setMenu("women")}>Women</li>
        <li className={menu === "kids" ? "active" : ""} onClick={() => setMenu("kids")}>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Loging</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
