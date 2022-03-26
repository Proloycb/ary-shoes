import React from 'react';
import './Cart.css';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = ({cart,suggest, handleSuggestProduct, removeCart}) => {
    return (
        <div className='cart'>
            <h2>Selected Shoes</h2>
            <div>
                {
                    cart.map(product => <CartProduct 
                        key = {product.id}
                        product= {product}
                    ></CartProduct>)
                }
            </div>
            <div className='btn-area'>
                <button className='btn-choose' onClick={() => handleSuggestProduct(cart)}>CHOOSE 1 FOR ME</button>
                {
                    suggest.map(items => <ChooseProduct key = {items[Math.floor(Math.random() * cart.length)].id} item = {items[Math.floor(Math.random() * items.length)]}></ChooseProduct>)
                }
                <br />
                <button className='btn-reset' onClick={removeCart}>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

const CartProduct = ({product}) => {
    const {image, name, id} = product;
    return (
        <div className='cart-product'>
            <img src={image} alt="" /> 
            <h5 className='product-name' key={id}>{name}</h5>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </div>
    )
}

const ChooseProduct = ({item}) => {
    const {image, name} = item
    return (
        <div className='cart-product'>
            <img src={image} alt="" /> 
            <h5 className='product-name'>{name}</h5>
        </div>
    )
}

export default Cart;