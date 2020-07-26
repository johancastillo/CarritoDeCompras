import React, { Component } from 'react';
import Producto from './producto';
import Carrito from '../carrito/carrito'
import { connect } from 'react-redux';

class Index extends Component {
    listarProductos = () => (
        this.props.productos.map((producto)=>(
        <ul key={producto.id}>
            <Producto data={producto}/>
        </ul>
      )));

      noHayProductos = () => (<div className="empty"><p>Aun no hay productos que comprar por lo tanto no es tan increible :(</p></div>)

    
    render() {
        return (
            <div className="store-container">
                <div className="store-item">
                    <div>
                        <p className="title">Mi tienda increible</p>
                    </div>
                    <div className="product-list">
                        {(this.props.productos.length > 0)? this.listarProductos() : this.noHayProductos()}
                    </div>

                </div>
                <div className="store-item">
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
