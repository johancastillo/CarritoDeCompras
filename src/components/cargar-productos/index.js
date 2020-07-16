import React, { Component } from 'react';
import Form from './form-load'

export default class index extends Component {
    render() {
        return (
            <div>
                <h3>Agregue un producto al inventario</h3>
                <Form/>
            </div>
        )
    }
}
