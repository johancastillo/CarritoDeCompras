import React from 'react';


const Tabla = (props) => {

    const ponerFilas = ()=> (
        props.productoseEnCarrito.map((producto)=>(
          <tr key={producto.id}>
            <td>
              {producto.nombre}
            </td>
            <td>
              {producto.cantidad}
            </td>
            <td>
              ${producto.precioUnitario}
            </td> 
            <td>
              ${producto.subtotal}
            </td> 
            
          </tr>
        ))
      )
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Cantidad 
                        </th>
                        <th>
                            Precio unitario
                        </th>
                        <th>
                            Subtotal
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {(props.productoseEnCarrito.length)? ponerFilas():''}
                </tbody>
            </table>
        </div>
    )
}

export default Tabla;