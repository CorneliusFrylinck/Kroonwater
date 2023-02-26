import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "./products.json";
import './product.css';
import ContactFormComponent from '../Shared/ContactForm/contactForm';

const ProductPage = () => {

    const { productId } = useParams();

    const [product, setProduct] = useState(undefined);
    const [pars, setPars] = useState(undefined);

    useEffect(() => {
        setProduct(data.products.filter((p) => p.id == productId)[0]);
        setPars(data.products.filter((p) => p.id == productId)[0].description.split("//"));
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