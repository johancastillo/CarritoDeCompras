import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabla from './tabla';
class Carrito extends Component {
    render() {
        console.log('Carrito=>');
        console.log(this.props);
        console.log('<= carrito');
        return (
            <div>
                <p className="titulo">Mi super carrito</p>
                <Tabla productoseEnCarrito={this.props.productoseEnCarrito} />
                <p className="total"><strong>Total: ${this.props.total}</strong></p>
            </div>
        )
    }
}
const mapStateToProps = (reducers) => {
    return reducers.carritoReducer;
}

export default connect(mapStateToProps)(Carrito)