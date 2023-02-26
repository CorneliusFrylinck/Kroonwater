import React, { useState } from 'react';
import './layout.css';
import logo from '../../Images/logo.png';
import searchIcon from '../../Images/search.png';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../Stores/store';

const Navbar = () => {
    const [itemList, setItemList] = useState(undefined);
    const {productStore} = useStore();

    const searchForItems = (e) => {
        const searchStr = e.target.value.toLowerCase();

        if (searchStr === null || searchStr.match(/^ *$/) !== null) {
            setItemList(undefined);
            return;
        }

        setItemList(productStore.getItemList(searchStr));
    }

    const setCategoryId = (categoryId) => {
        productStore.setCategoryId(categoryId);
    }

    return (
        <div className='nav-bar'>
            <Link to={'/'} className='logo-container nav-element'>
                <img className='logo' src={logo} alt='logo' />
            </Link>
            <Link to={'/'} className='nav-element'>Home</Link>
            <Link to={'/products/undefined'} onClick={() => setCategoryId(undefined)} className='nav-element'>Products</Link>
            <Link to={'/services'} className='nav-element'>Services</Link>
            <Link to={'/contact'} className='nav-element'>Contact</Link>
            <div >
                <input onChange={(e) => searchForItems(e)} className='nav-search' style={{backgroundImage: `url(${searchIcon}) no-repeat right`}} placeholder='Search...'/>
                <div className='search-image-list'>
                    {itemList !== undefined && itemList.map((item, idx) => {
                        return (
                            <Link to={`/product/${item.id}`} key={idx} className='search-image-container'>
                                <img className='search-image' src={require(`../../Images/${item.image}`)} alt="product" />
                                <div>{item.name}</div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default observer(Navbar)