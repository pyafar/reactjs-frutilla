import React, { useEffect, useState } from 'react'
import ProductList from '../ProductList'
import { useParams } from 'react-router-dom'
import { getCategory } from '../../helpers/getCategory'
import { productsDB } from '../../data/products'

const ProductListContainer = () => {
  const { categoryName } = useParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve) => {
      if (categoryName === 'all') {
        resolve(productsDB);
      } else {
        const filteredProducts = getCategory(categoryName);
        resolve(filteredProducts);
      }
    });

    promise.then((data) => {
      setProductList(data);
    });
  }, [categoryName]);

  return (
    <div>

      <ProductList products={productList} key ={productList.id}/>

    </div>
  );
};

export default ProductListContainer;