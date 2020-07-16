import React, { Component } from 'react';
import Tabla from './tabla';
import CargarProducto from '../cargar-productos/index';
import { connect } from 'react-redux'
class Inventario extends Component {
    renderTabla = () => {
        if (this.props.productos.length > 0) {
            return  <Tabla/>
        } else {
            return <p>Aun no hay productos, que tal si agrega algunos?</p>
        }
    }
    render() {
        return (
            <div>
                <div id="containerLeft">
                    {this.renderTabla()}
                </div>
                <div id="containerRight">
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