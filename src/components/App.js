import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Menu from './Menu'
import CargarProductos from './cargar-productos/index'
import Inventario from './inventario/index'
import Tienda from './tienda/index'
const App = () => (
  <BrowserRouter>
    <Menu/>
    <div className='margin'>
      <Route exact path='/' component={Tienda}/>
      <Route exact path='/inventario' component={Inventario}/>
   
    </div>
  </BrowserRouter>
);

export default App;