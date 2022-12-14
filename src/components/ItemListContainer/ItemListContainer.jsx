import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import arrayProductos from "../../json/productos.json";
import ItemList from "../ItemList/ItemList";








const ItemListContainer = () => {
    const [items, setItems] = useState([]);   
    const {id} = useParams();
    
    useEffect(() => {
    const promesa = new Promise ((resolve, reject) => {
        setTimeout(() => {
        resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);    
        },2000);
    });
    
    promesa.then((data) => {
    setItems(data);

    })

    }, [id]);



    
    return (
        <div className="container-sm">
        <div className="card-sm">
        <ItemList items={items} />
        </div>
        </div>
    )
}

export default ItemListContainer;