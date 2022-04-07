import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart}) => {
    return (
        <div>
            <div className='order-container'>
                        <h2>Order summary </h2>
                        <h5>Selected item : {cart.length}</h5>
                        <h5>Total price: $</h5>
                        <h5>Shipping charge: $</h5>
                        <h5>Total Tax: $</h5>
                        <button className='delete-btn'>
                            Clear Cart
                            <span className='icon'>
                <FontAwesomeIcon  icon={faShoppingCart} /></span>
                        </button><br />

                        <button className='review-btn'>Review Order</button>
                </div>
        </div>
    );
};

export default Cart;