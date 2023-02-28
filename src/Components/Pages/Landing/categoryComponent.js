import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const CategoryComponent = ({
    image,
    text,
    categoryId
}) => {
    return (
        <Link to={`/products/${categoryId}`}>
            <div className='category'>
                <img src={image} alt="loading..." />
                <p>{text}</p>
            </div>
        </Link>
    )
}

export default CategoryComponent