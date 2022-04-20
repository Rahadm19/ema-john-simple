import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    const {name, img, seller, ratings,price} = props.product
    return (
        <div className='p'>
            <div className='product'>
            <img src={img} alt="..." style={{width: 286, height: 286}}
            />
            <div className='details'>
            <h4 className='product-name'>{name}</h4>
            <p>Price: $ {price}</p>
            <h5>Sellar: {seller}</h5>
            <h5>Ratting: {ratings}</h5>
            </div>
            <button onClick={()=> props.handleAddtoCart(props.product)} className='btn'>
                Add to newCart
                <span className='icon'>
                <FontAwesomeIcon  icon={faShoppingCart} /></span>
                </button>
            </div>
           
        </div>
    );
};

export default Products;