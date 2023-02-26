import React from 'react';
import { useParams } from 'react-router-dom';
import './product.css';

const ProductPage = () => {

    const { productId } = useParams();
    return (
        <div className='product-page'>
            <div>ProductPage {productId}</div>
        </div>
    )
}

export default ProductPage