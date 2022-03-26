import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart'>
            <h2>Selected Shoes</h2>
            <div className='btn-area'>
                <button className='btn-choose'>CHOOSE 1 FOR ME</button>
                <br />
                <button className='btn-reset'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;