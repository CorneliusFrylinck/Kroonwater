import React, {useEffect, useState} from 'react';
import './product.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../Stores/store';

const FilterComponent = ({
    initialCategory
}) => {

    const [activeFilter, setActiveFiler] = useState(initialCategory);
    const {productStore} = useStore();

    const filterByCategory = (category) => {
        productStore.setCategoryId(category)
    }

    useEffect(() => {
        setActiveFiler(productStore.categoryId)
    }, [productStore.categoryId])

    return (
        <div className='filter-component'>
            <InputGroup className='flex'>
                <Form.Control
                    className='search-text'
                    type="text"
                    placeholder="Search here.."
                />
                <InputGroup.Text className='icon-text'>
                    <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
            </InputGroup>
            <div className='filter-options'>
                <div style={{color: activeFilter === 1 ? "#031153": "#01A3F6", cursor: activeFilter === 1 ? "default": "pointer"}} onClick={() => filterByCategory(1)}>Household Purifiers</div>
                <div style={{color: activeFilter === 2 ? "#031153": "#01A3F6", cursor: activeFilter === 2 ? "default": "pointer"}} onClick={() => filterByCategory(2)}>Industrial Purifiers</div>
                <div style={{color: activeFilter === 3 ? "#031153": "#01A3F6", cursor: activeFilter === 3 ? "default": "pointer"}} onClick={() => filterByCategory(3)}>Softeners</div>
                <div style={{color: activeFilter === undefined ? "#031153": "#01A3F6", cursor: activeFilter === undefined ? "default": "pointer"}} onClick={() => filterByCategory(undefined)}>All</div>
            </div>
        </div>
    )
}

export default observer(FilterComponent)