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
                <p>Mi super carrito</p>
                <Tabla productoseEnCarrito={this.props.productoseEnCarrito} />
                <p>Total: {this.props.total}</p>
            </div>
        )
    }
}
const mapStateToProps = (reducers) => {
    return reducers.carritoReducer;
}

export default connect(mapStateToProps)(Carrito)