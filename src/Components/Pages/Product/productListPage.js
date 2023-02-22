import React from 'react';
import { useParams } from 'react-router-dom';
import './product.css';

const ProductListPage = () => {
    const { categoryId } = useParams();
    
    return (
        <div>ProductListPage: {categoryId}</div>
    )
}

export default ProductListPage