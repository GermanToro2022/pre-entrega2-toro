import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Item = ({item}) => {
    const {nombre} = useCartContext();



    return (
        <div className="card">  
        <Link to={"/item/" + item.id}> 
        <img src={item.imagen} alt={item.name} width="400px"></img>    
        <p className="text">{item.name}</p>
        </Link>
        </div>
        
    )
}

export default Item;