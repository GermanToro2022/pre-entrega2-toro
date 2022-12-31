import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ItemList from "../ItemList/ItemList";








const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (id) {
            const queryFilter = query(queryCollection, where('category', '==', id))
            getDocs(queryFilter)
            .then(res => setItems(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setItems(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
    }, [id])





    return (
        <div className="container-sm">
            <div className="card-sm">
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer;