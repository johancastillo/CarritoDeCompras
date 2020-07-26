import React, { Component } from 'react';
import { connect } from 'react-redux';
class Formulario extends Component {
    state= {
        id: this.props.ultimoId,
        nombre:'',
        cantidad:1,
        precio:1
    }
    onChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
      };
    agregar = () => {
        this.props.dispatch({
            type:'AGREGAR_PRODUCTO',
            payload:this.state
        });
        this.setState({
            id: this.props.ultimoId,
            nombre:'',
            cantidad:1,
            precio:1
        })
    }
    render() {
        return (
            <div className="form">
                <div>
                    <label>Nombre del producto: </label>
                    <input 
                        type="text"
                        onChange={this.onChange}
                        className="form-control"
                        name="nombre"
                        value={this.state.nombre}
                    />
                </div>
                <div>
                    <label>Cantidad: </label>
                    <input 
                        type="number"
                        onChange={this.onChange}
                        className="form-control"
                        name="cantidad"
                        value={this.state.cantidad}
                    />
                </div>
                <div>
                    <label>Precio unitario: </label>
                    <input 
                        type="number"
                        onChange={this.onChange}
                        className="form-control"
                        name="precio"
                        value={this.state.precio}
                    />
                </div>

                <button onClick={this.agregar}>Guardar</button>
                
            </div>
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.inventarioReducer;
}

export default connect(mapStateToProps)(Formulario);
