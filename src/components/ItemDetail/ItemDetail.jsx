import React,{useState} from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({item}) => {

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);
    }


    return (
        <div className="container">
        <div className="card">
            <img src={item.imagen} alt={item.nombre} width="400px"/>
        </div>
        <div className="text">
                <h1>{item.name}</h1>
                <h3>{item.desc}</h3>
                <h4><b>${item.precio}</b></h4>
                {
                    goToCart
                    ? <Link to='/cart'>Finalizar Compra</Link>
                    : <ItemCount initial={1} stock={6} onAdd={onAdd} />
                }
            </div>
            </div>
    )
}

export default ItemDetail;