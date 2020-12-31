import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

// Components
import Navegation from './navegation/Navegation'
import Inventario from './inventario/index'
import Tienda from './tienda/index'


const App = () => (
  <div className="main-container">  
    <BrowserRouter>

      <div className="header">
        <Navegation />
      </div>

      <div className='content'>
        <Route exact path='/' component={Tienda}/>
        <Route exact path='/inventario' component={Inventario}/>
      </div>

    </BrowserRouter>
  </div>
);

export default App;