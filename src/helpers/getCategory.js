import {productsDB} from '../data/products'

export const getCategory = ( categoryName ) =>{
    return productsDB.filter(category => category.category === categoryName);
};