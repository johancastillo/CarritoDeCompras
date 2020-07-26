import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabla from './tabla';
class Carrito extends Component {
    render() {
        console.log('Carrito=>');
        console.log(this.props);
        console.log('<= carrito');
        return (
            <div >
                <div>
                    <p className="title">Mi super carrito</p>
                </div>
                <div className="product-list-car">    
                    <Tabla productoseEnCarrito={this.props.productoseEnCarrito} />
                    <p className="total"><strong>Total: ${this.props.total}</strong></p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (reducers) => {
    return reducers.carritoReducer;
}

export default connect(mapStateToProps)(Carrito)