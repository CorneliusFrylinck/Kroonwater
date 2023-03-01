import React, {useEffect, useState} from 'react';
import './product.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../Stores/store';

const FilterComponent = ({
    initialCategory,
    setCategory,
    searchFilter
}) => {

    const [activeFilter, setActiveFiler] = useState(initialCategory);
    const {productStore} = useStore();
    const [searchText, setSearchText] = useState("");

    const filterByCategory = (category) => {
        setCategory(category)
        setActiveFiler(category)
        productStore.categoryId = category
    }

    useEffect(() => {
        setActiveFiler(initialCategory)
    }, [])

    const searchTextUpdate = (e) => {
        console.log(e.target.value)
        setSearchText(s => s = e.target.value)
    }

    return (
        <div className='filter-component'>
            <InputGroup className='search-bar'>
                <Form.Control
                    className='search-text'
                    type="text"
                    placeholder="Search here.."
                    onChange={e => searchTextUpdate(e)}
                />
                <InputGroup.Text onClick={() => searchFilter(searchText)} className='icon-text'>
                    <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
            </InputGroup>
            <div className='filter-options'>
                <div className='filter-option' style={{color: activeFilter === 1 ? "#031153": "#01A3F6", cursor: activeFilter === 1 ? "default": "pointer"}} onClick={() => filterByCategory(1)}>Household Purifiers</div>
                <div className='filter-option' style={{color: activeFilter === 2 ? "#031153": "#01A3F6", cursor: activeFilter === 2 ? "default": "pointer"}} onClick={() => filterByCategory(2)}>Industrial Purifiers</div>
                <div className='filter-option' style={{color: activeFilter === 3 ? "#031153": "#01A3F6", cursor: activeFilter === 3 ? "default": "pointer"}} onClick={() => filterByCategory(3)}>Softeners</div>
                <div className='filter-option' style={{color: activeFilter === undefined || activeFilter === "undefined" ? "#031153": "#01A3F6", cursor: activeFilter === undefined ? "default": "pointer"}} onClick={() => filterByCategory(undefined)}>All</div>
            </div>
        </div>
    )
}

export default observer(FilterComponent)