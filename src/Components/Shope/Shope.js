import React, { useEffect, useState } from 'react';
import {addToDb, getStoreCart} from '../../utilities/fakedb'
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

    useEffect(()=>{
        const storeCart = getStoreCart();
        
        const savedCart = [];
        for(const id in storeCart){
            const addedproduct = products.find(product=> product.id === id)
            if(addedproduct){
                const quantity = storeCart[id];
                addedproduct.quantity= quantity;
                savedCart.push(addedproduct);
            }
        }
        setCart(savedCart);

    },[products])

    const handleAddtoCart =(product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);

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