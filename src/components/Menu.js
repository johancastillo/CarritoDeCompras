import React from 'react'
import { Link } from 'react-router-dom';

const Menu = (props)=>{
    return (
        <nav id='menu'>
            <Link to='/'>
                Tienda
            </Link>
            <Link to='/inventario'>
                Inventario
            </Link>
        </nav>
    )
}

export default Menu;