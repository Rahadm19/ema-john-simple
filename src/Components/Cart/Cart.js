import React from 'react';
import './Cart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart}) => {
    
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total= total+product.price;
        shipping = shipping + product.shipping;
    }
    let tax = total * 0.1;
    let taxt = parseFloat(tax.toFixed(2));
    const gtotal = total+shipping+tax;
    console.log(cart);
    return (
        <div>
            <div className='order-container'>
                        <h2>Order summary </h2>
                        <h5>Selected item : {cart.length}</h5>
                        <h5>Total price: ${total}</h5>
                        <h5>Shipping charge: ${shipping}</h5>
                        <h5>Total Tax: $ {taxt}</h5>
                        <h5>Total: ${gtotal}</h5>
                        <button className='delete-btn'>
                            Clear Cart
                            <span className='icon'>
                <FontAwesomeIcon  icon={faTrashAlt} /></span>
                        </button><br />

                        <button className='review-btn'>Review Order</button>
                </div>
        </div>
    );
};

export default Cart;