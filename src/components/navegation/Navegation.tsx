import React from 'react'
import { Link } from 'react-router-dom';
// Scss
import './Navegation.scss'
// Logo
import Logo from './Logo.svg'



const Navegation = () => {
    return (
        <nav className='navegation'>
            <div>
                <img src={Logo} className="logo" alt="logo" />
            </div>

            <div>
                <Link className="link" to='/'>
                    Tienda
                </Link>
                
                <Link  className="link" to='/inventario'>
                    Inventario
                </Link>
            </div>

        </nav>
    )
}

export default Navegation;