import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
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