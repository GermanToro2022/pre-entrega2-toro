import "../../components/style/style.css";
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='navbar'>
            <Link className="navbar_category" to={"/"}>Inicio</Link>
            <NavLink className="navbar_category" to={"/category/celulares"}>Celulares</NavLink>
            <NavLink className="navbar_category" to={"/category/heladeras"}>Heladeras</NavLink>
            <NavLink className="navbar_category" to={"/category/lavarropas"}>Lavarropas</NavLink>
        </div>)
}



export default NavBar;