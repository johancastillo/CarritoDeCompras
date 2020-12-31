import React, { Component } from 'react';
import Tabla from './tabla';
import CargarProducto from '../cargar-productos/index';
import { connect } from 'react-redux'


class Inventario extends Component {
    renderTabla = () => {
        if (this.props.productos.length > 0) {
            return  <Tabla/>
        } else {
            return <div className="empty"><p>Aun no hay productos, que tal si agrega algunos?</p></div>
            
        }
    }
    render() {  
        return (
            <div className="store-container">
                <div className="store-item">
                    <div>
                        <h1 className="title">Aqui van Todos los productos</h1>
                    </div>
                    <div className="product-list">
                        {this.renderTabla()}
                    </div>
                </div>
                <div className="store-item">
                    <CargarProducto/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.inventarioReducer
}

export default connect(mapStateToProps)(Inventario)