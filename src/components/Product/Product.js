import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {image, name, price, id} = product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className="product-info">
                <h4 key={id}>{name}</h4>
                <p>Price: ${price}</p>
            </div>
            <button className='btn-cart' onClick={ () => handleAddToCart(product)}>
                <p className='btn-text'>ADD TO CART</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;