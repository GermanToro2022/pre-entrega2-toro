import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/icons/Cart';
import Error404 from './components/Error404/Error404';
import CartWidget from './components/CartWidget/CartWidget';
import CartProvider from './context/CartContext';




function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar />
    <Routes>
     <Route path={"/"} element={<ItemListContainer />} />
     <Route path={"/category/:id"} element={<ItemListContainer />} />
     <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
     <Route path="/cart" element={<Cart />} />
     <Route path={"*"} element={<Error404 />} />
    </Routes>
    </CartProvider>
    </BrowserRouter> 
  )
}

  


export default App;
