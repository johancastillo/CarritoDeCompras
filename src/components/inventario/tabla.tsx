import React from 'react';
import {connect} from 'react-redux'

const Tabla = (props:any) => {

    const ponerFilas = ()=> (
        props.productos.map((producto:any, key:any)=>(
          <tr key={producto.id}>
            <td>
              {producto.nombre}
            </td>
            <td>
              {producto.cantidad}
            </td>
            <td>
              ${producto.precio}
            </td> 
            {/* <td>
								<Link to={ `/publicaciones/${key}`}>
									<div className="eye-solid3 icon"></div>
								</Link>
            </td> */}
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
                            Precio
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {(props.productos.length)? ponerFilas(): ''}
                </tbody>
            </table>
        </div>
    )
}
const mapStateToProps = (reducers:any) => {
	return reducers.inventarioReducer;
}

export default connect(mapStateToProps)(Tabla);