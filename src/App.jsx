import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import Productos from './components/Productos/Productos';



function App() {
const menus = [{
  name: 'Inicio',
  href:'/'
},
{
  name:'Productos',
  href:'/productos'
},
]

const categorias = [
  {
    name:'Celulares',
    id:0,
    route:'/category/celulares'
  },
  {
    name:'Heladeras',
    id:1,
    route:'/category/heladeras'
  },
  {
    name:'Lavarropas',
    id:2,
    route:'/category/lavarropas'
  }
]




  return (
    <BrowserRouter className="App">
      <NavBar menus={menus} categorias={categorias} />
      <Routes>
       <Route exact path='/' element={<Inicio />} />
       <Route exact path='/category/:id' element={<Productos />} />
       
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
