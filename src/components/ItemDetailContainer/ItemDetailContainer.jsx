import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);  
    const {id} = useParams(); 
    
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', 'id');
        getDoc(queryDoc)
        .then(res => setItem({id: res.id, ...res.data()}))
    }, [id])

    

    return (
        <div className="container">
        <div className="card">
        <ItemDetail item={item} />
        </div>
        </div>
    )

}


export default ItemDetailContainer;