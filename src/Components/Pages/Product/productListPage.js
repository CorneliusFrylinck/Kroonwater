import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './product.css';
import data from "./products.json";
import ProductComponent from './productComponent';
import FilterComponent from './filterComponent';

const ProductListPage = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState();
    const [displayProducts, setDisplayProducts] = useState();
    const [categoryFilter, setCategoryFilter] = useState();
    const [oldCategory, setOldCategory] = useState();

    useEffect(() => {
        setProducts(data.products)
        setDisplayProducts(data.products)
        if (categoryId !== undefined) {
            setCategoryFilter(categoryId);
        }
    }, [])

    const setCategory = (category) => {
        console.log("START====================================================START")
        setCategoryFilter(category);
        console.log(`Category: ${category}`)
        if (oldCategory === categoryFilter) return;
        
        setOldCategory(category);

        if (category === undefined) {
            setDisplayProducts(products);
            return;
        }
        
        if (category) {
            let display = products.filter(p => p.categoryId == category);
            setDisplayProducts(display);
        }
    }

    if (displayProducts === undefined) {
        return <div>Loading...</div>
    }
    
    return (
        <div className='product-page'>
            <FilterComponent setCategory={setCategory} initialCategory={categoryId} />
            <div className='product-list'>
                {displayProducts.map((product, idx) => {
                    return <ProductComponent key={idx} product={product} />
                })}
            </div>
        </div>
    )
}

export default ProductListPage