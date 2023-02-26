import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './product.css';
import ProductComponent from './productComponent';
import FilterComponent from './filterComponent';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../Stores/store';

const ProductListPage = () => {
    const { categoryId } = useParams();
    const [displayProducts, setDisplayProducts] = useState();
    const {productStore} = useStore();
    
    useEffect(() => {
        setDisplayProducts(productStore.getProducts())
    }, [productStore, productStore.categoryId])

    if (displayProducts === undefined) {
        return <div>Loading...</div>
    }
    
    return (
        <div className='products-page'>
            <FilterComponent initialCategory={categoryId} />
            <div className='product-list'>
                {displayProducts.map((product, idx) => {
                    return <ProductComponent key={idx} product={product} />
                })}
            </div>
        </div>
    )
}

export default observer(ProductListPage)