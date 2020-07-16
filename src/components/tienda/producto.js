import React, {Component} from 'react';
import { connect } from 'react-redux';
import Modal from './modal'

class Producto extends Component {
    state={
        openModal: false,
        disabled: false,
        cantidad:1,

    }

    handleCloseModal = () => {
        this.setState({
            openModal:false
        })
    }
    handleOpenModal = () => {
        this.setState({
            openModal:true
        })
    }

    onChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
        if(parseInt(this.state.cantidad) < 1 && parseInt(this.state.cantidad) >= parseInt(this.props.cantidad)){
            this.setState({
                disabled:true
            })
        }
    };

    restarAlInventario = (props, cantidad) => {
        const productoAntiguo = props.data
        const productos = props.inventarioReducer.productos
        const index = productos.indexOf(props.data)
        let nuevaCantidad = productoAntiguo.cantidad - cantidad
        if(nuevaCantidad <= 0){
            nuevaCantidad = 'Ninguno' 
        }
        const productoActualizado = productoAntiguo
        productoActualizado['cantidad'] = nuevaCantidad
        productos[index] = productoActualizado
        this.props.dispatch({
            type:'ACTUALIZAR_PRODUCTO',
            payload:productos
        })        
    }

    add = () =>{
        const body = {
            id: this.props.carritoReducer.ultimoId,
            nombre: this.props.data.nombre,
            cantidad:this.state.cantidad,
            precioUnitario: this.props.data.precio,
            subtotal: (this.props.data.precio * this.state.cantidad)
        }
        this.props.dispatch({
            type:'AGREGAR_AL_CARRITO',
            payload:body
        })

        this.restarAlInventario(this.props, body.cantidad)

        this.handleCloseModal()
    }
    render(){
        return(
            <div id="productCard">
                <div id="productCardPhoto">
                   <img src="./logo512.png"/> 
                </div>
                <div id="productCardDescription">
                    <p>{this.props.data.nombre}</p>
                    <p>$ {this.props.data.precio}</p>
                    <p>Quedan: {this.props.data.cantidad}</p>
                    <button onClick={this.handleOpenModal}>Add to Car</button>
                    <Modal isOpen={this.state.openModal} onClose={this.handleCloseModal}>
                        <label>Cuantos quieres?</label>
                        <input 
                        type="number" 
                        name="cantidad"
                        min={0} 
                        max={this.props.data.cantidad}
                        onChange={this.onChange}
                        value={this.state.cantidad}/>
                        
                        <button disabled={this.state.disabled} onClick={this.add}>Add</button>
                    </Modal>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({carritoReducer, inventarioReducer}) => {
    return {carritoReducer, inventarioReducer}
}

export default connect(mapStateToProps)(Producto);