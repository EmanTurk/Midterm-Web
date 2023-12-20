import React, { useContext } from "react";
import {useState} from "react";
import "./Navbar.css";
import logo from "../Assets/GLIMMIx.png";
import { Link } from "react-router-dom";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { AuthContext } from "../../Context/UserContext";
export const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const {user, setUser, logout} = useContext(AuthContext) 

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} width={90} height={90} alt="" />
      </div>
      <ul className="nav-menu">
       
        <li className={menu === "shop" ? "active" : ""}  onClick={() => setMenu("shop")} ><Link style={{textDecoration : 'none'}} to='/'>Shop</Link> </li>
        <li className={menu === "men" ? "active" : ""} onClick={() => setMenu("men")}><Link style={{textDecoration : 'none'}} to='/men'>Men</Link> </li>
        <li className={menu === "women" ? "active" : ""} onClick={() => setMenu("women")}><Link style={{textDecoration : 'none'}} to='/women'>Women</Link> </li>
        <li className={menu === "kids" ? "active" : ""} onClick={() => setMenu("kids")}><Link style={{textDecoration : 'none'}} to='/kids'>Kids</Link> </li>
      </ul>
      <div className="nav-login-cart">
     {!user ? (<Link to='/login'><button>Loging</button></Link>):(<>{user?.email}<button onClick={()=>setUser(null)}>logout</button></>)} 
      <Link to='/cart'>  <img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
