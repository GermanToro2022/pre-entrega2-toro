import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './components/Error404/Error404';




function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
     <Route path={"/"} element={<ItemListContainer />} />
     <Route path={"/category/:id"} element={<ItemListContainer />} />
     <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
     <Route path={"*"} element={<Error404 />} />
    </Routes>
    </BrowserRouter> 
  )
}

  
// const menus = [{
//   name: 'Inicio',
//   href:'/'
// },
// {
//   name:'Productos',
//   href:'/productos'
// },
// ]

// const categorias = [
//   {
//     name:'Celulares',
//     id:0,
//     route:'/category/celulares'
//   },
//   {
//     name:'Heladeras',
//     id:1,
//     route:'/category/heladeras'
//   },
//   {
//     name:'Lavarropas',
//     id:2,
//     route:'/category/lavarropas'
//   }
// ]




//   return (
//     <BrowserRouter className="App">
//       <NavBar menus={menus} categorias={categorias} />
//       <Routes>
//        <Route exact path='/' element={<Inicio />} />
//        <Route exact path='/categoria/:id' element={<Productos />} />
       
       
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
