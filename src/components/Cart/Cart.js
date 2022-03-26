import React from 'react';
import './Cart.css';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = (props) => {
    const {cart} = props;
    const handleChooseOne = () => {

    }
    return (
        <div className='cart'>
            <h2>Selected Shoes</h2>
            <div>
                {
                    cart.map(product => <CartProduct product= {product}></CartProduct>)
                }
            </div>
            <div className='btn-area'>
                <button className='btn-choose' onClick={handleChooseOne}>CHOOSE 1 FOR ME</button>
                <br />
                <button className='btn-reset'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

const CartProduct = (props) => {
    const {product} = props;
    const {image, name} = product;
    return (
        <div className='cart-product'>
            <img src={image} alt="" /> 
            <h5 className='product-name'>{name}</h5>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </div>
    )
}

export default Cart;