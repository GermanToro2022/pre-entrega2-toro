import React from "react";
import { useCartContext } from "../../context/CartContext";
import '../ItemCart/ItemCart.css';


const ItemCart = ({ product }) => {
const { removeProduct } = useCartContext();
return (
    <div className='itemCart'>
        <img src={product.imagen} alt={product.name} />
        <div>
            <p>Titulo: {product.name}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: ${product.precio}</p>
            <p>Subtotal: ${product.quantity * product.precio}</p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
        </div>
)



}


export default ItemCart;