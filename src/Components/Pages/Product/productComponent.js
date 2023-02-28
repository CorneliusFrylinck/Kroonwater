import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';

const ProductComponent = ({
    product
}) => {
    return (
        <Link to={`/product/${product.id}`} className='product-component'>
            <img src={require(`../../../Images/${product.image}`)} alt={product.altText} />
        </Link>
    )
}

export default ProductComponent