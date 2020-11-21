import React from 'react'
import Logo from './../pics/logo.png'
import { Link } from 'react-router-dom'


function Navbar(props) {
    return (
        <nav>
            <img src={Logo} className='logo'/>
            <ul>
               <Link style={navStyle} to='/'> <li><i className='fas fa-home'/>Home</li> </Link>
               <Link style={navStyle} to='Menu'> <li><i className='fas fa-shopping-basket '></i>Shop</li> </Link>
            </ul>
            <Link to='Card'style={navStyle}><i className='fas fa-shopping-cart'/> <span style={{color:'#fff'}}>{props.countItems}</span></Link>
        </nav>
    )
}
const navStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '20px',
    textTransform: 'uppercase'
}

export default Navbar
