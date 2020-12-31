import React from 'react'
import { Link } from 'react-router-dom';

const Menu = (props:any)=>{
    return (
        <nav className='menu'>
            <Link className="link" to='/'>
                Tienda
            </Link>
            <Link  className="link" to='/inventario'>
                Inventario
            </Link>
        </nav>
    )
}

export default Menu;