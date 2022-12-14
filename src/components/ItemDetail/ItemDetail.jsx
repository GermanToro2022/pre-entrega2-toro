import React from "react";
import arrayProductos from "../../json/productos.json";


const ItemDetail = ({item}) => {
    return (
        <div className="container">
        <div className="card">
            <img src={item.imagen} alt={item.nombre} width="400px"/>
        </div>
        <div className="text">
                <h1>{item.name}</h1>
                <h3>{item.desc}</h3>
                <h4><b>${item.precio}</b></h4>
            </div>
            </div>
    )
}

export default ItemDetail;