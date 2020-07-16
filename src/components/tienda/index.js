import React, { Component } from 'react';
import Producto from './producto';
import Carrito from '../carrito/carrito'
import { connect } from 'react-redux';

class Index extends Component {
    listarProductos = () => (
        this.props.productos.map((producto, key)=>(
        <ul key={producto.id}>
            <Producto data={producto}/>
        </ul>
      )));

      noHayProductos = () => (<div><p>Aun no hay productos que comprar por lo tanto no es tan increible :(</p></div>)

    
    render() {
        return (
            <div id="tiendaContainer">
                <div id="containerLeft">
                    <p className="titulo">Mi tienda increible</p>
                    {(this.props.productos.length > 0)? this.listarProductos() : this.noHayProductos()}
                </div>
                <div id="containerRight">
                    <Carrito/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.inventarioReducer;
}

export default connect(mapStateToProps)(Index);
