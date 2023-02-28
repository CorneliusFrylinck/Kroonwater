import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './product.css';
import ContactFormComponent from '../Shared/ContactForm/contactForm';
import axios from 'axios';

const ProductPage = () => {

    const { productId } = useParams();

    const [product, setProduct] = useState(undefined);
    const [pars, setPars] = useState(undefined);

    useEffect(() => {
        axios.get("../Data/products.json").then((data) => {
            let products = data.data.products;

            let prod = products.filter(p => p.id.toString() === productId.toString())[0];
            
            setProduct(prod);
            setPars(prod.description.split("//"));
        })
    }, [productId]);
    if (product === undefined || pars === undefined) return (
        <div>loading...</div>
    );

    return (
        <div className='product-page'>
            <div className='product-page-header'>
                <img className='product-page-image' src={require(`../../../Images/${product.image}`)} alt="product" />
                <div className='flex-col product-page-heading'>
                    <h3>{product.name}</h3>
                    <div>{pars.map((par, idx) => {
                        return <p key={idx}>{par}</p>
                    })}</div>
                </div>
            </div>
            <hr />
            <ContactFormComponent subject={`Enquire about ${product.name}`} />
        </div>
    )
}

export default ProductPage