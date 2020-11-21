import React from 'react'
import Data from './components/Data'

function Menu(props) {
    return (
        <div className='shop-items'>
            {Data.map(item => (
                <div key={item.name} className='grid-parent'>
                     <img src={item.src} className='data-image'/> 
                     <div className='item-description'>
                         <div className='flex-item'> {item.name} </div>
                         <div className='flex-item'> {item.price}$ </div>
                           </div> 
                           <button className='add-btn' style={button} onClick={() => props.addToCard(item)}><i className="fas fa-plus"></i></button>
                           </div>
                           
            ))}
        </div>
    )
}
const button = {
    color: '#fff',
    width: '70px',
    height: '40px',
    background: '#84C502',
    border:'none',
    borderRadius:'30px',
    cursor:'pointer',
    transition:'0.2s'
}
export default Menu
