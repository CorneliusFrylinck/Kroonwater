import { makeAutoObservable } from "mobx";
import axios from "axios";

export default class ProductStore {
    categoryId;
    displayProducts;
    selectedProduct;

    constructor() {
        makeAutoObservable(this);
    }

    setCategoryId = (categoryId) => {
        this.categoryId = categoryId;
    }

    setDisplayProducts = () => {
        this.setFileredFileData()
    }

    getProducts = () => {
        return this.getFileredFileData()
    }

    setProduct = (productId) => {
        let result = this.getFileredFileData()[0];

        this.selectedProduct = result;
    }

    setFileredFileData = () => {
        axios.get("../Data/products.json").then((data) => {
            if (this.categoryId === undefined) this.displayProducts = data.data.products;

            this.displayProducts = data.data.products.filter(p => p.categoryId == this.categoryId);
        })
    }

    getFileredFileData = () => {
        axios.get("../Data/products.json").then((data) => {
            if (this.categoryId === undefined) return data.data.products;

            return data.data.products.filter(p => p.categoryId == this.categoryId);
        })
    }
}