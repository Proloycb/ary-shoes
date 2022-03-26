import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find(item => item.id === product.id);
        if(!exists){
            newCart = [...cart, product];
        }
        else{
            const rest = cart.filter(item => item.id !== product.id);
            newCart = [...rest, exists];
        }
        if(newCart.length === 5) {
            alert('You do not add product more then 4')
        }
        else{
            setCart(newCart);
        }
        
    }

    const[suggest, setSuggest] = useState([]);
    const handleSuggestProduct = (cart) => {
        const newCart = [cart];
        setSuggest(newCart);
    }
    const removeCart = () => {
        setCart([]);
        setSuggest([]);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                         key = {product.id}
                         product = {product}
                         handleAddToCart = {handleAddToCart}
                         ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart= {cart}
                product = {products}
                suggest = {suggest}
                handleSuggestProduct = {handleSuggestProduct}
                removeCart = {removeCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;