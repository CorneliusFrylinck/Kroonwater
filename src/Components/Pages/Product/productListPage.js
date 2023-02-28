import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './product.css';
import ProductComponent from './productComponent';
import FilterComponent from './filterComponent';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../Stores/store';
import axios from 'axios';

const ProductListPage = () => {
    const { categoryId } = useParams();
    const [displayProducts, setDisplayProducts] = useState();
    const {productStore} = useStore();
    const [category, setCategory] = useState();
    
    useEffect(() => {
        productStore.setCategoryId(categoryId);
    }, [])
    
    useEffect(() => {
        axios.get("../Data/products.json").then((data) => {
            let products = data.data.products;
            if (category === "undefined" || category === undefined) {
                setDisplayProducts(products);
                return;
            }

            setDisplayProducts(products.filter(p => p.categoryId == category));
        })
    }, [productStore.categoryId])

    const searchFilter = (searchText) => {
        axios.get("../Data/products.json").then((data) => {
            let products = data.data.products;
            if (category === "undefined" || category === undefined || searchText === "" || searchText === undefined || searchText === "undefined") {
                setDisplayProducts(products);
                return;
            }
            
            if (category === "undefined" || category === undefined ) {
                setDisplayProducts(products.filter(p => p.name.toLowerCase().includes(searchText)));
                return;
            }

            setDisplayProducts(products.filter(p => p.categoryId == category && p.name.toLowerCase().includes(searchText)));
        })
    }


    if (displayProducts === undefined) {
        return <div>Loading...</div>
    }
    
    return (
        <div className='products-page'>
            <FilterComponent initialCategory={categoryId} setCategory={setCategory} searchFilter={searchFilter} />
            <div className='product-list'>
                {displayProducts.map((product, idx) => {
                    return <ProductComponent key={idx} product={product} />
                })}
            </div>
        </div>
    )
}

export default observer(ProductListPage)