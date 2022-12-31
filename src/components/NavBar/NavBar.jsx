import React from "react";
import "../../components/style/style.css";
import { Link, NavLink } from 'react-router-dom';
import Cart from "../icons/Cart";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
        <div className='navbar'>
            <Link className="navbar_category" to={"/"}>Inicio</Link>
            <NavLink className="navbar_category" to={"/category/celulares"}>Celulares</NavLink>
            <NavLink className="navbar_category" to={"/category/heladeras"}>Heladeras</NavLink>
            <NavLink className="navbar_category" to={"/category/lavarropas"}>Lavarropas</NavLink>
            <NavLink className="navbar_category" to={'cart'}> <CartWidget />  </NavLink>
    )</div>)
}



export default NavBar;