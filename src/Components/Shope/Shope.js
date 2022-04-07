import React, { useEffect, useState } from 'react';
import './Shope.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';


const Shope = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddtoCart =(product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=> <Products
                    key={product.id}
                    product={product}
                    handleAddtoCart={handleAddtoCart}
                    ></Products>)
                }
            </div>
            <div className='tttt'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shope;