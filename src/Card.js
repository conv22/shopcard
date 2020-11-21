
import React from 'react'
import { Link } from 'react-router-dom'
function Card(props) {
    if (props.addedItems.length !== 0) {
    return (
        <div>
        <table className='card-table'>
            <thead>
            <tr><th>Product</th>
                <th>Title</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total cost</th></tr>
                </thead>

                <tbody>
            {props.addedItems.map(item => (
                <tr key={item.name}>
                  <td><img src={item.src} className='card-image'/><div className='delete-btn-div'><button className='delete-btn' onClick={() => props.deleteItem(item)}><i className='far fa-trash-alt'></i></button> </div></td>
                  <td>{item.name}</td>
                  <td>{item.price}$</td>
                  <td> {item.quantity} <span className='quantity-span'> <span><button className='card-btn' onClick={() => props.changeQuantity(item, -1)}>-</button></span> <button className='card-btn' onClick={() => props.changeQuantity(item, 1)}> + </button></span>  </td>
                  <td> {item.price * item.quantity}$  </td>
                </tr>
                
            ))}
            </tbody>
        </table>
        <div className='total'>Total cost {props.totalCost} $
        <div> <button className='shop-btn'>Check out</button></div></div>
        </div>
    )}
    else {
        return (
            <div id='empty'>
                <div className='empty-child'>
                <i className='fas fa-shopping-bag'></i>
            <div id='bag-msg'>Your bag is empty</div> 
            <Link to='/Menu'><button className='shop-btn'> Shop </button> </Link>
            </div>
            </div>
        )
    }
}

export default Card
