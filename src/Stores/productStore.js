import { makeAutoObservable } from "mobx";
import data from "../Data/products.json";

export default class ProductStore {
    products;
    categoryId;

    constructor() {
        this.products = data.products;
        this.categoryId = undefined;
        makeAutoObservable(this);
    }

    setCategoryId = (categoryId) => {
        this.categoryId = categoryId;
    }

    getProducts = () => {
        if (this.categoryId === undefined) return this.products;

        return this.products.filter(p => p.categoryId == this.categoryId);
    }

    getProduct = (productId) => {
        return this.products.filter((p) => p.id == productId)[0];
    }

    getItemList = (searchStr) => {
        return this.products.filter(p => p.name.toLowerCase().includes(searchStr));
    }
}