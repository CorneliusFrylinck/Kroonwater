import React from 'react';
import './product.css';

const ProductComponent = ({
    product
}) => {
    return (
        <div className='product-component'>
            <img src={require(`../../../Images/${product.image}`)} alt="product" />
        </div>
    )
}

export default ProductComponent